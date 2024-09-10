document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "Post 1",
      content: "This is a preview of the first post...",
      link: "posts/post1.html",
    },
    {
      title: "Post 2",
      content: "This is a preview of the second post...",
      link: "posts/post2.html",
    },
  ];

  const postsContainer = document.getElementById("posts");
  posts.slice(0, 2).forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post-preview");
    postElement.innerHTML = `
            <h2><a href="${post.link}">${post.title}</a></h2>
            <p>${post.content}</p>
        `;
    postsContainer.appendChild(postElement);
  });
});
