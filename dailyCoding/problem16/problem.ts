// This problem was asked by Twitter.
// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:
// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.


class OrderLog {
    private log: string[];
    private capacity: number;
    private currentPos: number = 0;
    private size: number = 0;

    constructor(N: number) {
        this.log = new Array(N).fill('');
        this.capacity = N;
    }

    record(orderId: string): void {
        this.log[this.currentPos] = orderId;
        this.currentPos = (this.currentPos + 1) % this.capacity;
        this.size = Math.min(this.size + 1, this.capacity);
    }

    get_last(i: number): string | null {
        if (i > this.size || i <= 0) return null;
        return this.log[(this.currentPos - i + this.capacity) % this.capacity];
    }
}

// Example usage:
const log = new OrderLog(5);
log.record("Order1");
log.record("Order2");
log.record("Order3");
log.record("Order4");
log.record("Order5");
console.log(log.get_last(1)); // Output: Order5
console.log(log.get_last(2)); // Output: Order4

log.record("Order6");
console.log(log.get_last(1)); // Output: Order6
console.log(log.get_last(6)); // Output: null (or error, based on implementation choice)
