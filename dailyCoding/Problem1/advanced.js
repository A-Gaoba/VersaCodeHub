function hasPairWithSum(arr, sum) {
  let start = 0,
    end = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (start < end) {
    const currentSum = arr[start] + arr[end];
    if (currentSum === sum) return true;
    else if (currentSum < sum) start++;
    else end--;
  }
  return false;
}

console.log(hasPairWithSum([10, 15, 3, 7], 17))