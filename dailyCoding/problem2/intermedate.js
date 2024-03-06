function productArrayOptimized(nums) {
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);
  const product = new Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    product[i] = left[i] * right[i];
  }
  
  return product;
}
console.log(productArrayOptimized([1, 2, 3, 4, 5]));
