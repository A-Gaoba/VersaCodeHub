// This problem was asked by Google.
// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.
// Hint: The basic equation of a circle is x2 + y2 = r2.

function estimatePi(numPoints: number): number {
  let pointsInsideCircle = 0;

  for (let i = 0; i < numPoints; i++) {
    const x = Math.random(); // Random x-coordinate between 0 and 1
    const y = Math.random(); // Random y-coordinate between 0 and 1

    // Check if the point is inside the quarter circle
    if (x * x + y * y <= 1) {
      pointsInsideCircle++;
    }
  }

  // Estimate π using the ratio of points inside the circle to total points
  const piEstimation = (4 * pointsInsideCircle) / numPoints;

  return piEstimation;
}

// Example: Estimate π using 100,000 random points
const numPoints = 100000;
const piValue = estimatePi(numPoints);

console.log(
  `Estimated value of π with ${numPoints} points: ${piValue.toFixed(3)}`
);
