
var largestDivisibleSubset = function (nums) {
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

const nums1 = [1, 2, 3];
console.log(largestDivisibleSubset(nums1));

const nums2 = [1, 2, 4, 8];
console.log(largestDivisibleSubset(nums2));
