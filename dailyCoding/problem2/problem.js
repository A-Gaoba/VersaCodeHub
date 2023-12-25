// Good morning! Here's your coding interview problem for today.
// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function productAllElemArrExceptSelf(nums) {
    var length = nums.length;
    if (length === 0)
        return [];
    var result = new Array(length).fill(1);
    for (var i = 1; i < length; i++) {
        result[i] = nums[i - 1] * result[i - 1];
    }
    var rightProduct = 1;
    for (var j = length - 1; j >= 0; j--) {
        result[j] *= rightProduct;
        rightProduct *= nums[j];
    }
    return result;
}
console.log(productAllElemArrExceptSelf([1, 2, 3, 4, 5])); // output would be [120, 60, 40, 30, 24]
console.log(productAllElemArrExceptSelf([3, 2, 1])); // output would be [2, 3, 6]
