const promise = new Promise((resolve, reject) => {
  if (true) {
    // any condition gets true
    resolve("Worked");
  } else {
    reject("Oh Bhai");
  }
});

// promise.then((res) => console.log(res));

promise
  .then((result) => result + "?")
  .then((res1) => res1 + "*")
  .then((res2) => {
    console.log(res2);
    // throw Error("Dimag Kharab BC!");
  })
  .catch((err) => console.error({ err: err.message }));
