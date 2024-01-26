// This problem was asked by Apple.
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

class JobScheduler {
  static scheduleJob(f: () => void, n: number): void {
    setTimeout(f, n);
  }
}

// Example usage:
const myFunction = () => {
  console.log("Job executed!");
};

// Schedule the job to run myFunction after 2000 milliseconds (2 seconds)
JobScheduler.scheduleJob(myFunction, 2000);
