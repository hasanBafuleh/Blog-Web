async function add() {
  const name = document.querySelector("#name").value;
  const content = document.querySelector("#content").value;

  let response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      content: content,
      date: new Date().toLocaleString(),
    }),
  });

  document.querySelector("#name").value = "";
  document.querySelector("#content").value = "";
  show();
}

async function show() {
  let response = await fetch("http://localhost:3000/posts");
  let posts = await response.json();
  posts = posts.reverse();

  document.querySelector("#posts").innerHTML = "";

  for (let index = 0; index < posts.length; index++) {
    document.querySelector("#posts").innerHTML += `
    <div class="card text-center" style="margin: 25px">
    <div class="card-header">
        ${posts[index].name}
    </div>
    <div class="card-body">
      <p class="card-text">${posts[index].content}</p>
    </div>
    <div class="card-footer text-muted">
        ${posts[index].date}
    </div>
    </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  show();
});
