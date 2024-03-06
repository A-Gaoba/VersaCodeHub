function productArray(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
}
console.log(productArray([1, 2, 3, 4, 5])); 
