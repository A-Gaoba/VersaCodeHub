function findPairOnePass(numbers, k) {
  let seenNumbers = new Set();
  for (let number of numbers) {
    if (seenNumbers.has(k - number)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}
console.log(findPairOnePass([10, 15, 3, 7], 17)); // يطبع true
