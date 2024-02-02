// This problem was asked by Amazon.
// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
function longestSubstringWithKDistinctChars(s, k) {
    if (k <= 0) {
        return 0;
    }
    let maxLength = 0;
    let charFrequency = {};
    let leftPointer = 0;
    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        let currentChar = s[rightPointer];
        charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;
        while (Object.keys(charFrequency).length > k) {
            let leftChar = s[leftPointer];
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
let s = "abcba";
let k = 2;
let result = longestSubstringWithKDistinctChars(s, k);
console.log(result); // Output: 3 (length of "bcb")
