// This problem was asked by Apple.
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

class JobScheduler {
  static scheduleJob(f: () => void, n: number): void {
    if (n < 0) {
      throw new Error("Invalid time duration. Please provide a non-negative value for 'n'.");
    }

    setTimeout(f, n);
  }
}

// Example usage:
const myFunction = () => {
  console.log("Job executed!");
};

try {
  // Schedule the job to run myFunction after 2000 milliseconds (2 seconds)
  JobScheduler.scheduleJob(myFunction, 2000);
} catch (error) {
  console.error(error.message);
}

