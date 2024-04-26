function generateGreeting(name) {
  const message = "Hello, " + name + "!";
  console.log(message);
}

generateGreeting("Alice"); // Output: Hello, Alice!
generateGreeting("Bob"); // Output: Hello, Bob!


function createGreeter(name) {
  const message = "Hello, " + name + "!";

  function greet() {
    console.log(message);
  }

  return greet;
}

const greetAlice = createGreeter("Alice");
const greetBob = createGreeter("Bob");

greetAlice(); 
greetBob(); 
