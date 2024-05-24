// Сгенерировать 48 пятизначных неповторяющихся чисел (элементов).
// Вывести их на экран.
// Построить хеш-таблицу, используя:
// хеш-функцию – сумма всех цифр элемента,
// метод устранения коллизий – метод цепочек.

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

function insertElement() {
  let num = parseInt(prompt("Enter number to insert:"), 10);
  if (isNaN(num)) return;
  let inserted = insertElementHelper(num);
  if (inserted) {
    displayMessage(
      `${num} (sum: ${sumOfDigits(num)}) inserted at hash index ${
        inserted.index
      }, position ${inserted.position}.`
    );
  } else {
    displayMessage(`Element ${num} already exists.`);
  }
}

function deleteElement() {
  let num = parseInt(prompt("Enter number to delete:"), 10);
  if (isNaN(num)) return;
  let deleted = deleteElementHelper(num);
  if (deleted) {
    displayMessage(
      `Element ${num} deleted from hash index ${deleted.index}, position ${deleted.position}.`
    );
  } else {
    displayMessage(`Element ${num} not found.`);
  }
}

function replaceElement() {
  let oldNum = parseInt(prompt("Enter old number to replace:"), 10);
  let newNum = parseInt(prompt("Enter new number:"), 10);
  if (isNaN(oldNum) || isNaN(newNum)) return;
  let deleted = deleteElementHelper(oldNum);
  if (deleted) {
    let inserted = insertElementHelper(newNum);
    displayMessage(
      `Replaced ${oldNum} with ${newNum} at hash index ${inserted.index}, position ${inserted.position}.`
    );
  } else {
    displayMessage(`Element ${oldNum} not found. Cannot replace.`);
  }
}

function searchElement() {
  let num = parseInt(prompt("Enter number to search:"), 10);
  if (isNaN(num)) return;
  let found = searchElementHelper(num);
  if (found) {
    displayMessage(
      `Element found: ${num} at hash index ${found.index}, position ${found.position}.`
    );
  } else {
    displayMessage(`Element ${num} not found.`);
  }
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
  console.log("bucket");

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

function deleteElementHelper(num) {
  let h_index = hashFunction(num);
  let index = ht[h_index].indexOf(num);
  if (index !== -1) {
    ht[h_index].splice(index, 1);
    a = a.filter((item) => item !== num);
    return { index: h_index, position: index };
  }
  return null;
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

function searchElementHelper(num) {
  let h_index = hashFunction(num);
  let index = ht[h_index].indexOf(num);
  if (index !== -1) {
    return { index: h_index, position: index };
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
