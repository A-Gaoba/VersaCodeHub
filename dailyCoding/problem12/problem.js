// This problem was asked by Amazon.
// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
// For example, if N is 4, then there are 5 unique ways:
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
function countWaysToClimbStairs(n) {
    if (n <= 1) {
        return 1;
    }
    var ways = new Array(n + 1);
    ways[0] = 1;
    ways[1] = 1;
    for (var i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
}
function countWaysWithVariableSteps(n, steps) {
    if (n === 0) {
        return 1;
    }
    var ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    for (var i = 1; i <= n; i++) {
        for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
            var step = steps_1[_i];
            if (i - step >= 0) {
                ways[i] += ways[i - step];
            }
        }
    }
    return ways[n];
}
var N = 4;
var waysToClimb = countWaysToClimbStairs(N);
console.log("Number of ways to climb ".concat(N, " stairs: ").concat(waysToClimb));
var X = [1, 3, 5];
var waysWithVariableSteps = countWaysWithVariableSteps(N, X);
console.log("Number of ways to climb ".concat(N, " stairs with steps ").concat(X, ": ").concat(waysWithVariableSteps));
