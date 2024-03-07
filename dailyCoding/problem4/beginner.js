function findFirstMissingPositive(nums) {
  let current = 1;
  nums.sort((a, b) => a - b);
  nums.forEach((num) => {
    if (num === current) {
      current++;
    }
  });
  return current;
}
console.log(findFirstMissingPositive([3, 4, -1, 1]));
