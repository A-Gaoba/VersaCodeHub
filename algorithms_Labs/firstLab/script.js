const m = 48;
const t = m / 2;
let ht = Array.from({ length: t }, () => []);
let a = [];

function sumOfDigits(num) {
  return String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function hashFunction(num) {
  return sumOfDigits(num) % t;
}

function printHashTable() {
  let output =
    "Generated numbers and their sums:\n_______________________________\n\n";
  for (let i = 0; i < a.length; i++) {
    let sum = sumOfDigits(a[i]);
    output += `${a[i]}(sum: ${sum}),`;
  }
  output +=
    "\n____________________________\n\nGenerated hash addresses sequence:\n";
  for (let i = 0; i < a.length; i++) {
    let h_function = hashFunction(a[i]);
    output += h_function + ((i + 1) % 9 === 0 ? "\n" : " ");
  }
  output += "\n\nHash Table:\n";
  for (let i = 0; i < ht.length; i++) {
    output += `${i}: ${ht[i].join(" ")}\n`;
  }
  let filled = ht.filter((bucket) => bucket.length > 0).length;
  let load_factor = filled / ht.length;
  output += `\nNumber of filled cells: ${filled}\n`;
  output += `Load factor = ${load_factor}\n`;
  let totalSteps = ht.reduce(
    (sum, bucket) => sum + (bucket.length * (bucket.length + 1)) / 2,
    0
  );

  let averageSteps = filled ? totalSteps / filled : 0;
  output += `Total number of steps in the hash table = ${totalSteps}\n`;
  output += `Average number of steps needed to place an element: ${averageSteps}\n`;
  displayMessage(output);
}

function displayMessage(message) {
  document.getElementById("output").innerText = message;
}

function insertElementHelper(num) {
  let h_index = hashFunction(num);
  if (!ht[h_index].includes(num)) {
    let position = ht[h_index].length;
    ht[h_index].push(num);
    a.push(num);
    return { index: h_index, position: position };
  }
  return null;
}

function initializeHashTable() {
  while (a.length < m) {
    let num = Math.floor(Math.random() * 90000) + 10000;
    if (!a.includes(num)) {
      insertElementHelper(num);
    }
  }
  printHashTable();
}

window.onload = initializeHashTable;
