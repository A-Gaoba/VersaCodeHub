// This problem was asked by Apple.
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
var JobScheduler = /** @class */ (function () {
    function JobScheduler() {
    }
    JobScheduler.scheduleJob = function (f, n) {
        if (n < 0) {
            throw new Error("Invalid time duration. Please provide a non-negative value for 'n'.");
        }
        setTimeout(f, n);
    };
    return JobScheduler;
}());
// Example usage:
var myFunction = function () {
    console.log("Job executed!");
};
try {
    JobScheduler.scheduleJob(myFunction, 2000);
}
catch (error) {
    console.error(error.message);
}
