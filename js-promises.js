const promise = new Promise((resolve, reject) => {
  if (true) {
    // any condition gets true
    resolve("Worked");
  } else {
    reject("Oh Bhai");
  }
});

promise.then((res) => console.log(res));
