class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// function creates a binary tree with 20 nodes.
function createSampleTree() {
  const nodes = [];
  for (let i = 1; i <= 20; i++) {
    nodes.push(new TreeNode(i));
  }

  nodes[0].left = nodes[1];
  nodes[0].right = nodes[2];
  nodes[1].left = nodes[3];
  nodes[1].right = nodes[4];
  nodes[2].left = nodes[5];
  nodes[2].right = nodes[6];
  nodes[3].left = nodes[7];
  nodes[3].right = nodes[8];
  nodes[4].left = nodes[9];
  nodes[4].right = nodes[10];
  nodes[5].left = nodes[11];
  nodes[5].right = nodes[12];
  nodes[6].left = nodes[13];
  nodes[6].right = nodes[14];
  nodes[7].left = nodes[15];
  nodes[7].right = nodes[16];
  nodes[8].left = nodes[17];
  nodes[8].right = nodes[18];
  nodes[9].left = nodes[19];

  return nodes[0];
}

const root = createSampleTree();
const canvas = document.getElementById("treeCanvas");
const ctx = canvas.getContext("2d");

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "15px Arial";
}

// function recursively draws the binary tree on the canvas.
function drawTree(node, x, y, angle, depth, branchLength) {
  if (!node) return;

  // Calculate the new position (newX, newY) for the child node.
  const dx = branchLength * Math.cos(angle);
  const dy = branchLength * Math.sin(angle);

  const newX = x + dx;
  const newY = y + dy;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(newX, newY, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, newX, newY);

  drawTree(
    node.left,
    newX,
    newY,
    angle - Math.PI / 6,
    depth + 1,
    branchLength * 0.8
  );
  drawTree(
    node.right,
    newX,
    newY,
    angle + Math.PI / 6,
    depth + 1,
    branchLength * 0.8
  );
}

// function performs different types of tree traversals and displays the result.
function traverseTree(traversalType) {
  const result = [];

  // Left, Node, Right
  function inOrderTraversal(node) {
    if (node) {
      inOrderTraversal(node.left);
      result.push(node.value);
      inOrderTraversal(node.right);
    }
  }

  // Left, Right, Node.
  function postOrderTraversal(node) {
    if (node) {
      postOrderTraversal(node.left);
      postOrderTraversal(node.right);
      result.push(node.value);
    }
  }

  // Node, Left, Right.
  function preOrderTraversal(node) {
    if (node) {
      result.push(node.value);
      preOrderTraversal(node.left);
      preOrderTraversal(node.right);
    }
  }

  // Node, Right, Left.
  function reversePreOrderTraversal(node) {
    if (node) {
      result.push(node.value);
      reversePreOrderTraversal(node.right);
      reversePreOrderTraversal(node.left);
    }
  }

  // Right, Node, Left.
  function reverseInOrderTraversal(node) {
    if (node) {
      reverseInOrderTraversal(node.right);
      result.push(node.value);
      reverseInOrderTraversal(node.left);
    }
  }

  // Right, Left, Node.
  function reversePostOrderTraversal(node) {
    if (node) {
      reversePostOrderTraversal(node.right);
      reversePostOrderTraversal(node.left);
      result.push(node.value);
    }
  }

  clearCanvas();
  drawTree(root, canvas.width / 2, 50, Math.PI / 2, 0, 120);

  switch (traversalType) {
    case "inOrder":
      inOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `In-order Traversal (LNF): ${result.join(", ")}`;
      break;
    case "postOrder":
      postOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `Post-order Traversal (LRN): ${result.join(", ")}`;
      break;
    case "preOrder":
      preOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `Pre-order Traversal (NLR): ${result.join(", ")}`;
      break;
    case "reversePreOrder":
      reversePreOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `Pre-order Traversal Right to Left (NRL): ${result.join(
        ", "
      )}`;
      break;
    case "reverseInOrder":
      reverseInOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `In-order Traversal Right to Left (RNL): ${result.join(
        ", "
      )}`;
      break;
    case "reversePostOrder":
      reversePostOrderTraversal(root);
      document.getElementById(
        "result"
      ).innerText = `Post-order Traversal Right to Left (RLN): ${result.join(
        ", "
      )}`;
      break;
  }
}

// Initial draw
clearCanvas();
drawTree(root, canvas.width / 2, 50, Math.PI / 2, 0, 120);
