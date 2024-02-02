// This problem was asked by Amazon.
// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

function longestSubstringWithKDistinctChars(s: string, k: number): number {
  if (k <= 0) {
      return 0;
  }

  let maxLength = 0;
  let charFrequency: { [char: string]: number } = {};
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      const currentChar = s[rightPointer];

      charFrequency[currentChar] = (charFrequency[currentChar] || 0) + 1;

      while (Object.keys(charFrequency).length > k) {
          const leftChar = s[leftPointer];
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

const s = "abcba";
const k = 2;
const result = longestSubstringWithKDistinctChars(s, k);
console.log(result);  // Output: 3 (length of "bcb")
