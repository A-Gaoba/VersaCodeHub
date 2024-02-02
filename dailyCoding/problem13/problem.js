// This problem was asked by Amazon.
// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
function longestSubstringWithKDistinctChars(s, k) {
    if (k <= 0) {
        return 0;
    }
    var maxLength = 0;
    var charFrequency = {};
    var leftPointer = 0;
    for (var rightPointer = 0; rightPointer < s.length; rightPointer++) {
        var currentChar = s[rightPointer];
        charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;
        while (Object.keys(charFrequency).length > k) {
            var leftChar = s[leftPointer];
            charFrequency[leftChar]--;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            leftPointer++;
        }
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }
    return maxLength;
}
// Example usage:
var s = "abcba";
var k = 2;
var result = longestSubstringWithKDistinctChars(s, k);
console.log(result); // Output: 3 (length of "bcb")
