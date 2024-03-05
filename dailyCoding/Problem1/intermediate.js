function findPairImproved(numbers, k) {
  if (!Array.isArray(numbers) || typeof k !== 'number') {
    return false;
  }
  let numSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (numSet.has(k - numbers[i])) {
      return true;
    }
    numSet.add(numbers[i]);
  }
  return false;
}
console.log(findPairImproved([10, 15, 3, 7], 17)); // يطبع true
