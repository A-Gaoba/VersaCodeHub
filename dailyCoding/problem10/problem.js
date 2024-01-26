// This problem was asked by Apple.
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
var JobScheduler = /** @class */ (function () {
    function JobScheduler() {
    }
    JobScheduler.scheduleJob = function (f, n) {
        setTimeout(f, n);
    };
    return JobScheduler;
}());
// Example usage:
var myFunction = function () {
    console.log("Job executed!");
};
// Schedule the job to run myFunction after 2000 milliseconds (2 seconds)
JobScheduler.scheduleJob(myFunction, 2000);
