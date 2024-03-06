function productArrayEfficient(nums) {
  let product = 1;
  let zeroCount = 0;
  nums.forEach((num) => {
    if (num !== 0) product *= num;
    else zeroCount++;
  });

  return nums.map((num) =>
    zeroCount > 1
      ? 0
      : zeroCount === 1
      ? num === 0
        ? product
        : 0
      : product / num
  );
(productArrayEfficient([1, 2, 3, 4, 5]));
