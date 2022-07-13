const runDirection = (num, direction, callback) => {
  console.log(`${num} ${direction}`);
  callback();
};

// Sample of callback hell
rundirection(1, "north", () => {
  runDirection(2, "east", () => {
    rundirection(3, "south", () => {
      runDirection(4, "west", () => {
        console.log("Done!");
      });
    });
  });
});

// To overcome callback hell, we can use promises