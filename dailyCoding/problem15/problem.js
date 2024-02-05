// This problem was asked by Facebook.
// Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
var RandomPicker = /** @class */ (function () {
    function RandomPicker() {
        this.selectedElement = null;
        this.count = 0;
    }
    RandomPicker.prototype.pickRandomElement = function (newElement) {
        this.count++;
        // For the first element, just select it
        if (this.count === 1) {
            this.selectedElement = newElement;
            return;
        }
        // For subsequent elements, select with decreasing probability
        var probability = 1 / this.count;
        var randomValue = Math.random();
        if (randomValue < probability) {
            this.selectedElement = newElement;
        }
    };
    RandomPicker.prototype.getRandomElement = function () {
        return this.selectedElement;
    };
    return RandomPicker;
}());
// Example usage:
var stream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var picker = new RandomPicker();
for (var _i = 0, stream_1 = stream; _i < stream_1.length; _i++) {
    var element = stream_1[_i];
    picker.pickRandomElement(element);
}
var randomElement = picker.getRandomElement();
console.log("Randomly selected element: ".concat(randomElement));
