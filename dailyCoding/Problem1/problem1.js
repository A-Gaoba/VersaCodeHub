// Good morning! Here's your coding interview problem for today.
// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
function hasSumTwoNums(numbers, k) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                return "The sum ".concat(k, " can be obtained by ").concat(numbers[i], " and ").concat(numbers[j]);
            }
        }
    }
    return "No pair found";
}
console.log(hasSumTwoNums([10, 15, 3, 7], 17));
