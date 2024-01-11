// This problem was asked by Google.
// An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
// If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

class Node {
  constructor(value) {
    this.value = value;
    this.both = null; // XOR of next and previous nodes
  }
}

class XORLinkedList {
  constructor() {
    this.head = null;
  }

  add(element) {
    const newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let next;

      while (current) {
        next = prev ^ current.both;

        if (!next) {
          current.both = prev ^ newNode;
          newNode.both = current;
          break;
        }

        prev = current;
        current = next;
      }
    }
  }

  get(index) {
    let current = this.head;
    let prev = null;
    let next;

    for (let i = 0; i < index; i++) {
      next = prev ^ current.both;

      if (!next) {
        throw new Error("Index out of bounds");
      }

      prev = current;
      current = next;
    }

    return current;
  }
}

// Example usage:
const xorList = new XORLinkedList();

xorList.add(1);
xorList.add(2);
xorList.add(3);

console.log(xorList.get(0).value);
console.log(xorList.get(1).value);
console.log(xorList.get(2).value);
