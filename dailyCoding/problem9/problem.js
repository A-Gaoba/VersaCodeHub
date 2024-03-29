// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
// Follow-up: Can you do this in O(N) time and constant space?
function findLargestSum(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var inclusive = nums[0];
  var exclusive = 0;
  for (var i = 1; i < nums.length; i++) {
    var temp = Math.max(inclusive, exclusive);
    inclusive = exclusive + nums[i];
    exclusive = temp;
  }
  return Math.max(inclusive, exclusive);
}

var example1 = [2, 4, 6, 2, 5];
var example2 = [5, 1, 1, 5];
console.log(findLargestSum(example1));
console.log(findLargestSum(example2));
