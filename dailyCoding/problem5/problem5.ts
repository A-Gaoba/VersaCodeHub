// This problem was asked by Jane Street.
// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

type Pair = (f: (a: number, b: number) => any) => any;

function cons(a: number, b: number): Pair {
    function pair(f: (a: number, b: number) => any): any {
        return f(a, b);
    }
    return pair;
}

function car(pair: Pair): number {
    return pair((a: number, _: number) => a);
}

function cdr(pair: Pair): number {
    return pair((_: number, b: number) => b);
}

// Test
const pair = cons(3, 4);
console.log(car(pair)); // Output: 3
console.log(cdr(pair)); // Output: 4
