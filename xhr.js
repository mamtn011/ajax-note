// to check whether it is connected or not
console.log("Connected");

const loadPost = document.getElementById("loadpost");
const box = document.getElementById("box");
const ul = document.createElement("ul");
// XMLHttpRequest...oprn..sent and showing data in DOM..................
const loadTitle = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  request.send();
  request.onreadystatechange = function getData() {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.forEach((el) => {
        const li = document.createElement("li");
        li.textContent = el.title;
        ul.appendChild(li);
      });
      box.insertAdjacentElement("beforeend", ul);
    }
  };
};
loadPost.addEventListener("click", loadTitle);

// using onload/onerror..with function
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
