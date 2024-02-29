# Max Values of Subarrays

This project includes a TypeScript solution for a common algorithmic challenge: finding the maximum values of each subarray of a given size within an array. This task, often asked in coding interviews, requires efficient handling of arrays and understanding of data structures to achieve optimal time and space complexity.

## Problem Statement

Given an array of integers and an integer `k`, where `1 <= k <= length of the array`, compute the maximum values of each subarray of length `k`.

**Example:**

For `array = [10, 5, 2, 7, 8, 7]` and `k = 3`, the output should be `[10, 7, 8, 8]`.

Explanation:

- `10 = max(10, 5, 2)`
- `7 = max(5, 2, 7)`
- `8 = max(2, 7, 8)`
- `8 = max(7, 8, 7)`

The challenge is to solve this problem with an O(n) time complexity and O(k) space complexity.

## Solution Approach

The solution utilizes a double-ended queue (deque) to maintain the indexes of useful elements for each window of size `k`. This approach ensures that we can efficiently find the maximum for each subarray by keeping the deque ordered such that the maximum value's index is always at the front.

Key steps in the algorithm include:

- Processing the first `k` elements to initialize the deque.
- Iterating through the array, updating the deque for each window, and printing the maximum value for the current window.

## How to Run

To run this solution, ensure you have TypeScript and Node.js installed on your system. Follow these steps:

1. Save the solution code in a file named `maxSubarray.ts`.
2. Compile the TypeScript code to JavaScript using the TypeScript compiler (tsc):

   ```
   tsc maxSubarray.ts
   ```

3. Run the compiled JavaScript file with Node.js:

   ```
   node maxSubarray.js
   ```

This will execute the code and print the maximum values of each subarray of length `k` for the provided array.

## Contributing

Contributions to improve the efficiency or readability of the solution are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

