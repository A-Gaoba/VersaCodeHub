// This problem was asked by Google.
// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

function printMaxOfSubarrays(arr: number[], k: number): void {
  let deque: number[] = []; // Holds indexes of useful elements

  // Initial window
  for (let i = 0; i < k; ++i) {
    while (deque.length > 0 && arr[i] >= arr[deque.at(-1)]) {
      deque.pop();
    }
    deque.push(i);
  }

  // Remaining windows
  for (let i = k; i < arr.length; ++i) {
    console.log(arr[deque[0]]); // Maximum of the previous window

    // Remove indexes out of the current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements
    while (deque.length > 0 && arr[i] >= arr[deque.at(-1)]) {
      deque.pop();
    }

    deque.push(i);
  }

  console.log(arr[deque[0]]); // Maximum of the last window
}

// Example usage
const arr = [10, 5, 2, 7, 8, 7];
const k = 3;
printMaxOfSubarrays(arr, k);
