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

class UnivalResult {
  count: number;
  isUnival: boolean;

  constructor(count: number, isUnival: boolean) {
      this.count = count;
      this.isUnival = isUnival;
  }
}

function countUnivalSubtrees(root: TreeNode | null): number {
  return countUnivalSubtreesHelper(root).count;
}

function countUnivalSubtreesHelper(root: TreeNode | null): UnivalResult {
  if (root === null) {
      return new UnivalResult(0, true);
  }

  const leftResult = countUnivalSubtreesHelper(root.left);
  const rightResult = countUnivalSubtreesHelper(root.right);

  const isLeftUnival = (root.left === null) || (root.val === root.left.val && leftResult.isUnival);
  const isRightUnival = (root.right === null) || (root.val === root.right.val && rightResult.isUnival);

  const isCurrentUnival = isLeftUnival && isRightUnival;

  const totalCount = leftResult.count + rightResult.count + (isCurrentUnival ? 1 : 0);

  return new UnivalResult(totalCount, isCurrentUnival);
}

// Example usage:
const root = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)));
const result = countUnivalSubtrees(root);
console.log(result);
