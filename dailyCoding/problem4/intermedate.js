function findSmallestMissingSorted(nums) {
  nums = nums.filter(n => n > 0).sort((a, b) => a - b);
  let expected = 1;
  for (let num of nums) {
    if (num === expected) {
      expected++;
    } else if (num > expected) {
      break;
    }
  }
  return expected;
}
console.log(findSmallestMissingSorted([3, 4, -1, 1]));
