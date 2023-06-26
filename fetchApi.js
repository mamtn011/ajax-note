console.log("connected");

function myAxios(method, url, body = null) {
  // body for send/add item
  const request2 = new XMLHttpRequest();
  request2.open(method, url);
  request2.responseType = "json"; //responsetype json for json.parse
  request2.setRequestHeader("Content-Type", "application/json");
  request2.onload = () => {
    if (request2.status >= 400) {
      console.log("Failed");
    } else {
      console.log(request2.response);
    }
  };
  request2.onerror = () => {
    console.log("Error..");
  };
  request2.send(JSON.stringify(body));
}
const url = "https://jsonplaceholder.typicode.com/posts";
myAxios("GET", url);
myAxios("POST", url, { name: "Mobin", job: "webdeveloper" });

// fetch...........................................
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    return response.json(); // json must be small letter
  })
  .then((data) => {
    console.log(data);
    const id = data.map((el) => el.id);
    console.log(id);
  })
  .catch((err) => console.log(err));
// fetch using async await..
async function findData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json();
    console.log(data);
    const title = await data.map((el) => el.title);
    console.log(title);
  } catch (err) {
    console.log(err);
  }
}
findData();
