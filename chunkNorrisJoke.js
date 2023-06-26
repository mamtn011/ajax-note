console.log("connected");

const jokeElm = document.querySelector(".joke");
const getJokeElm = document.querySelector(".getjoke");
// selecting random category
function getCategory(data) {
  const category = data[Math.floor(Math.random() * data.length)];
  return category;
}
// without async await (to see just cut 2 from function name into event listener)
function getRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((data) => {
      const category = getCategory(data);
      return fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      jokeElm.textContent = `${data.categories[0].toUpperCase()}: ${
        data.value
      }`;
    })
    .catch((err) => {
      console.log(err);
    });
}
// using async await
async function getRandomJoke2() {
  try {
    const resCat = await fetch("https://api.chucknorris.io/jokes/categories");
    const catNames = await resCat.json();
    const category = getCategory(catNames);
    const resJoke = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const jokeObj = await resJoke.json();
    jokeElm.textContent = `${jokeObj.categories[0].toUpperCase()}: ${
      jokeObj.value
    }`;
  } catch (err) {
    console.log(err);
  }
}
getJokeElm.addEventListener("click", getRandomJoke2);
