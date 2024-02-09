// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

const largestDivisibleSubset = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const dp = new Array(nums.length).fill(1);
  let maxSize = 1;
  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;

        if (dp[i] > maxSize) {
          maxSize = dp[i];
          maxIndex = i;
        }
      }
    }
  }

  const result = [];
  let currentSize = maxSize;
  let currentNum = nums[maxIndex];

  for (let i = maxIndex; i >= 0; i--) {
    if (currentNum % nums[i] === 0 && dp[i] === currentSize) {
      result.unshift(nums[i]);
      currentNum = nums[i];
      currentSize--;
    }
  }

  return result;
};

console.log(largestDivisibleSubset([1, 2, 3]));
console.log(largestDivisibleSubset([1, 2, 4, 8]));
