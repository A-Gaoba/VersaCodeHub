function findSmallestMissing(nums) {
  let smallest = 1;
  while (true) {
    if (!nums.includes(smallest)) {
      return smallest;
    }
    smallest++;
  }
}
console.log(findSmallestMissing([3, 4, -1, 1]));
