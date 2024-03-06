function productArrayAdvanced(nums) {
  let product = 1;
  let zeroCount = 0;
  for (let num of nums) {
    if (num === 0) {
      zeroCount++;
      continue;
    }
    product *= num;
  }

  return nums.map(num => {
    if (zeroCount > 1) return 0;
    if (zeroCount === 1) return num === 0 ? product : 0;
    return product / num;
  });
}
console.log(productArrayAdvanced([1, 2, 3, 4, 5])); // يطبع [120, 60, 40, 30, 24]
