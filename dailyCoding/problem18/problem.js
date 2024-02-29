// This problem was asked by Google.
// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.
function printMaxOfSubarrays(arr, k) {
    var deque = []; // Initialize the deque to hold indexes
    // Process the first k elements (the first window)
    for (var i = 0; i < k; ++i) {
        // Remove elements that are not useful
        while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) {
            deque.pop();
        }
        // Add new element's index
        deque.push(i);
    }
    // Process the rest of the array
    for (var i = k; i < arr.length; ++i) {
        // The element at the front of the deque is the maximum of the previous window
        console.log(arr[deque[0]]);
        // Remove the elements which are out of this window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        // Remove all elements smaller than the currently
        // being added element (remove useless elements)
        while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) {
            deque.pop();
        }
        // Add current element at the back of deque
        deque.push(i);
    }
    // Print the maximum element of the last window
    console.log(arr[deque[0]]);
}
// Example usage
var arr = [10, 5, 2, 7, 8, 7];
var k = 3;
printMaxOfSubarrays(arr, k);
