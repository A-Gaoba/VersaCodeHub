// This problem was asked by Facebook.
// A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
// Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
function minCostToPaintHouses(costs) {
    var N = costs.length; // Number of houses
    var K = costs[0].length; // Number of colors
    // Initialize the dp array with the costs of the first house
    var dp = [costs[0]];
    // Loop through each house starting from the second one
    for (var n = 1; n < N; n++) {
        dp[n] = [];
        for (var k = 0; k < K; k++) {
            // Find the minimum cost of painting the previous house with a different color
            var minCost = Number.MAX_VALUE;
            for (var color = 0; color < K; color++) {
                if (color !== k) {
                    minCost = Math.min(minCost, dp[n - 1][color]);
                }
            }
            // Add the cost of painting the current house with color k
            dp[n][k] = costs[n][k] + minCost;
        }
    }
    // Find the minimum cost from the last row of dp
    return Math.min.apply(Math, dp[N - 1]);
}
// Example usage
var costs = [
    [1, 5, 3],
    [2, 9, 4],
]; // N x K matrix of costs
console.log(minCostToPaintHouses(costs));
