// This problem was asked by Jane Street.
// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Given this implementation of cons:
function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}
function car(pair) {
    return pair(function (a, _) { return a; });
}
function cdr(pair) {
    return pair(function (_, b) { return b; });
}
// Test
var pair = cons(3, 4);
console.log(car(pair)); // Output: 3
console.log(cdr(pair)); // Output: 4
