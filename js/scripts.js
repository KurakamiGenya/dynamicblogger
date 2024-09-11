document.addEventListener("DOMContentLoaded", () => {
  // Fetch the list of posts dynamically
  fetch("../posts/posts.json")
    .then((response) => response.json())
    .then((posts) => {
      const postsContainer = document.getElementById("posts");

      // Highlighted change: Display the 3 most recent posts
      const fetchPromises = posts.slice(0, 3).map((postUrl) =>
        fetch(postUrl)
          .then((response) => response.text())
          .then((data) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const title = doc.querySelector("h1").innerText;
            const content = doc.querySelector("p").innerText;

            return { postUrl, title, content };
          })
      );

      Promise.all(fetchPromises).then((postsData) => {
        postsData.forEach(({ postUrl, title, content }) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post-preview");
          postElement.innerHTML = `
            <h2><a href="${postUrl}">${title}</a></h2>
            <p>${content}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      });
    });
});
