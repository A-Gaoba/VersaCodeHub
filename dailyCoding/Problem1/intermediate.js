function hasPairWithSum(arr, sum) {
  const seen = new Set();
  for(let num of arr) {
    if(seen.has(sum - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(hasPairWithSum([10, 15, 3, 7], 17))