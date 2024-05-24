class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.search(data)) {
      alert(`Node with value ${data} already exists.`);
      return;
    }
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.display();
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.output.push(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      this.output.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      this.output.push(node.data);
    }
  }

  remove(data) {
    if (data === null || data === undefined || data === "") {
      this.root = null;
    } else {
      this.root = this.removeNode(this.root, data);
    }
    this.display();
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // Deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // Deleting node with one child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      const aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  display() {
    const treeElement = document.getElementById("tree");
    treeElement.innerHTML = "";
    this.displayTreeD3();
  }

  displayTreeD3() {
    if (!this.root) return;

    const root = d3.hierarchy(this.root, (d) =>
      d ? [d.left, d.right].filter((n) => n !== null) : []
    );

    const width = 800;
    const height = 600;

    const treeLayout = d3.tree().size([width, height - 200]);
    const links = treeLayout(root).links();
    const nodes = root.descendants();

    const svg = d3
      .select("#tree")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, 50)`); // Centering the tree horizontally

    svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          .linkVertical()
          .x((d) => d.x - width / 2)
          .y((d) => d.y)
      );

    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x - width / 2},${d.y})`);

    node.append("circle").attr("r", 10);

    node
      .append("text")
      .attr("dy", ".35em")
      .attr("y", (d) => (d.children ? -20 : 20))
      .style("text-anchor", "middle")
      .text((d) => d.data.data);
  }
}

const bst = new BinarySearchTree();

function insertNode() {
  const value = document.getElementById("nodeValue").value;
  if (value) {
    bst.insert(parseInt(value));
    document.getElementById("nodeValue").value = "";
  }
}

function removeNode() {
  const value = document.getElementById("nodeValue").value;
  if (value) {
    bst.remove(parseInt(value));
    document.getElementById("nodeValue").value = "";
  } else {
    bst.remove(null);
  }
}

function insertRandomNodes() {
  for (let i = 0; i < 20; i++) {
    const randomValue = Math.floor(Math.random() * 900) + 100; // Generate 3-digit number
    bst.insert(randomValue);
  }
}

function inorderTraversal() {
  bst.output = [];
  bst.inorder(bst.getRootNode());
  displayOutput();
}

function preorderTraversal() {
  bst.output = [];
  bst.preorder(bst.getRootNode());
  displayOutput();
}

function postorderTraversal() {
  bst.output = [];
  bst.postorder(bst.getRootNode());
  displayOutput();
}

function searchNode() {
  const value = document.getElementById("nodeValue").value;
  const searchResultElement = document.getElementById("searchResult");
  if (value) {
    const result = bst.search(parseInt(value));
    if (result) {
      let path = "";
      let currentNode = bst.getRootNode();
      let depth = 0;

      while (currentNode && currentNode.data !== parseInt(value)) {
        depth++;
        if (parseInt(value) < currentNode.data) {
          path += "left -> ";
          currentNode = currentNode.left;
        } else {
          path += "right -> ";
          currentNode = currentNode.right;
        }
      }

      path += "found";
      searchResultElement.innerHTML = `Node found: ${result.data}<br>Path: ${path}<br>Depth: ${depth}`;
    } else {
      searchResultElement.innerHTML = "Node not found";
    }
    document.getElementById("nodeValue").value = "";
  }
}

function displayOutput() {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = bst.output.join(" ");
}
