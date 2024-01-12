// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Class to store the result of a subtree.
class UnivalResult {
  count: number;
  isUnival: boolean;

  constructor(count: number, isUnival: boolean) {
      this.count = count;
      this.isUnival = isUnival;
  }
}

// Main function to count the number of unival subtrees in a binary tree.
function countUnivalSubtrees(root: TreeNode | null): number {
  return countUnivalSubtreesHelper(root).count;
}

// Helper function to recursively count unival subtrees and check if a subtree is unival.
function countUnivalSubtreesHelper(root: TreeNode | null): UnivalResult {
  // Base case: an empty tree is considered a unival tree.
  if (root === null) {
      return new UnivalResult(0, true);
  }

  // Recursively calculate the result for the left and right subtrees.
  const leftResult = countUnivalSubtreesHelper(root.left);
  const rightResult = countUnivalSubtreesHelper(root.right);

  // Check if the left and right subtrees are unival based on their results.
  const isLeftUnival = (root.left === null) || (root.val === root.left.val && leftResult.isUnival);
  const isRightUnival = (root.right === null) || (root.val === root.right.val && rightResult.isUnival);

  // Check if the current subtree is unival.
  const isCurrentUnival = isLeftUnival && isRightUnival;

  // Calculate the total count of unival subtrees.
  const totalCount = leftResult.count + rightResult.count + (isCurrentUnival ? 1 : 0);

  // Return the result for the current subtree.
  return new UnivalResult(totalCount, isCurrentUnival);
}


const root = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)));
const result = countUnivalSubtrees(root);
console.log(result); 

