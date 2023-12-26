// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class TreeNode {
  val: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: string, left: TreeNode | null = null, right: TreeNode | null = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function serialize(root: TreeNode | null): string {
  if (!root) {
      return 'null';
  }

  const leftSerialized = serialize(root.left);
  const rightSerialized = serialize(root.right);

  return `${root.val},${leftSerialized},${rightSerialized}`;
}

function deserialize(s: string): TreeNode | null {
  const nodes = s.split(',');
  return deserializeHelper(nodes);
}

function deserializeHelper(nodes: string[]): TreeNode | null {
  const val = nodes.shift();
  if (val === 'null' || val === undefined) {
      return null;
  }

  const node = new TreeNode(val);
  node.left = deserializeHelper(nodes);
  node.right = deserializeHelper(nodes);

  return node;
}

// Test
const node = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
const serializedNode = serialize(node);
console.log(serializedNode); // Serialized string representation of the tree

const deserializedNode = deserialize(serializedNode);
console.log(deserializedNode?.left?.left?.val); // Output: 'left.left'
