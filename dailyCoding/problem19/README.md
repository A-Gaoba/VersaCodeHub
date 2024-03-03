# Minimize House Painting Costs

This project provides a solution to a common algorithmic problem often asked in technical interviews, including by companies like Facebook. The problem focuses on a builder looking to construct a row of N houses, each of which can be painted in one of K different colors. The goal is to minimize the overall cost of painting all the houses under the constraint that no two adjacent houses can have the same color.

## Problem Statement

Given a row of N houses and K possible colors, each house can be painted in one of the K colors with a specific cost associated with each color. The cost of painting each house with each color is provided in an N x K matrix where the nth row and kth column represent the cost to build the nth house with the kth color.

The challenge is to find the minimum cost to paint all houses such that no two neighboring houses have the same color.

## Solution Overview

The solution utilizes dynamic programming to efficiently compute the minimum cost. It involves creating a 2D array to keep track of the minimum cost of painting up to the current house with each of the K colors, ensuring that no two adjacent houses are painted the same color.

### Key Concepts

- **Dynamic Programming**: An optimization technique used to solve complex problems by breaking them down into simpler subproblems.
- **State Representation**: The state is represented by a 2D array where the element at the nth row and kth column holds the minimum cost of painting up to the nth house with the kth color.
- **Transition**: The cost to paint the current house with a certain color is calculated by adding the cost of painting the previous house with any other color (to avoid the same color for adjacent houses) to the current cost of painting.

## Implementation

The TypeScript implementation provides a function `minCostToPaintHouses`, which accepts the cost matrix as input and returns the minimum cost to achieve the goal.

### Prerequisites

- Node.js installed on your machine.
- Basic understanding of TypeScript and Node.js.

### Running the Code

1. Ensure TypeScript is installed globally or in your project.
2. Save the provided code in a file, e.g., `MinimizeCost.ts`.
3. Compile the TypeScript file to JavaScript using the TypeScript compiler (tsc):

   ```bash
   tsc MinimizeCost.ts
   ```

4. Run the resulting JavaScript file with Node.js:

   ```bash
   node MinimizeCost.js
   ```

## Example Usage

```typescript
const costs = [
  [1, 5, 3],
  [2, 9, 4]
];
console.log(minCostToPaintHouses(costs));
// Output: The minimum cost to paint all houses.
```

## Conclusion

This solution demonstrates an efficient approach to solving a complex problem using dynamic programming. It is adaptable to various scenarios where minimizing costs under constraints is required.

