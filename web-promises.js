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
      const err = false;

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

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  console.log(response);
}
getUsers();

// const promise1 = Promise.resolve("First");
// const promise2 = 123123;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Bye");
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (result) => result.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log({ values });
// });
