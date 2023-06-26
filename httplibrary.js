console.log("connected");

const http = {
  async get(url) {
    const response = await fetch(url);
    return await response.json();
  },

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    return await response.json();
  },

  async update(url, data) {
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    return await response.json();
  },

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    return await response.json();
  },
};

async function run() {
  const postData = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  const updateData = {
    title: "Title updated",
  };

  try {
    const posts = await http.get("https://jsonplaceholder.typicode.com/posts");
    console.log(posts);
    const addedData = await http.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    console.log(addedData);
    const updatedData = await http.update(
      "https://jsonplaceholder.typicode.com/posts/2",
      updateData
    );
    console.log(updatedData);
    const deletedData = await http.delete(
      "https://jsonplaceholder.typicode.com/posts/4"
    );
    console.log(deletedData);
  } catch (err) {
    console.log(err);
  }
}
run();
