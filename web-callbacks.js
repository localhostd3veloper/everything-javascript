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
  
  function createPost(newPost, callback) {
    setTimeout(() => {
      posts.push(newPost);
      callback();
    }, 2000);
  }
  
  createPost({ title: "Karma is a B*tch", body: "It is what it is" }, getPosts);
  