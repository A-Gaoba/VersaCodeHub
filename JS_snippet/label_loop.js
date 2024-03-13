// Standard Loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    if (i === 1 && j === 2) {
      console.log("Standard Loop: Breaking at i =", i, "and j =", j);
      break;
    }
    console.log("Standard Loop: i =", i, "j =", j);
  }
}


outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 4; j++) {
    if (i === 1 && j === 2) {
      console.log("Labeled Loop: Breaking at i =", i, "and j =", j);
      break outerLoop;
    }
    console.log("Labeled Loop: i =", i, "j =", j);
  }
}
