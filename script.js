import Card from "./js/Сard.js";
async function getUsers() {
  const response = await fetch("https://ajax.test-danit.com/api/json/users");
  const users = await response.json();
  return users;
}

async function getPosts() {
  const response = await fetch(`https://ajax.test-danit.com/api/json/posts`);
  const posts = await response.json();
  return posts;
}

function renderPosts() {
  getUsers().then((users) => {
    getPosts().then((posts) => {users.forEach((user) => {posts.forEach((post) => {
          if (user.id === post.userId) {
            let card = new Card(
              user.name,
              user.email,
              post.title,
              post.body,
              post.id
            );
            card.render();
          }
        });
      });
    });
  });
}

renderPosts();
