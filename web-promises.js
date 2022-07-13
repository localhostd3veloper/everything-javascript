const posts = [
  {
    title: "Everything is Temporary!",
    body: "This is life, my friend",
  },
  {
    title: "Nothing is Permanent!",
    body: "This is the fake truth, daddy!",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<ol>${index + 1}. ${post.title}</ol>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      const err = true;

      if (!err) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

createPost({ title: "Karma is a B*tch", body: "It is what it is" })
  .then(() => {
    getPosts();
  })
  .catch((err) => console.error(err));
