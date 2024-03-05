function findPair(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === k) {
        return true;
      }
    }
  }
  return false;
}
console.log(findPair([10, 15, 3, 7], 17)); // يطبع true
