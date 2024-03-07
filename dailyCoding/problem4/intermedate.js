function findFirstMissingPositive(nums) {
  nums = nums.filter(n => n >= 1);
  let set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
}
console.log(findFirstMissingPositive([3, 4, -1, 1]));
