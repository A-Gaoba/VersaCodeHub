// Good morning! Here's your coding interview problem for today.
// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.
function firstMissingPositive(nums) {
    var n = nums.length;
    // Rearrange elements so that nums[i] = i + 1 for each valid i
    for (var i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            var temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    // Find the first missing positive integer
    for (var i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}
// Test cases
var arr1 = [3, 4, -1, 1];
console.log("First missing positive integer:", firstMissingPositive(arr1)); // Output: 2
var arr2 = [1, 2, 0];
console.log("First missing positive integer:", firstMissingPositive(arr2)); // Output: 3
