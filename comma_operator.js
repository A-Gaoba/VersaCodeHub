// Without Comma Operator
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 4; k++) {
      console.log("Without Comma Operator: i =", i, ", j =", j, ", k =", k);
    }
  }
}


// With Comma Operator
for (let i = 0, j = 0, k = 0; i < 5 && j < 3 && k < 4; i++, j++, k++) {
  console.log("With Comma Operator: i =", i, ", j =", j, ", k =", k);
}

function a(){console.log('a'); return 'a';}
function b(){console.log('b'); return 'b';}
function c(){console.log('c'); return 'c';}

var x = (a(), b(), c());

console.log(x);      // Outputs "c"

let x = 5;
let  = (x++, x * 2); 
console.log(y); // Output: 10 
