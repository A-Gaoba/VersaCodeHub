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
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
// Class to store the result of a subtree.
var UnivalResult = /** @class */ (function () {
    function UnivalResult(count, isUnival) {
        this.count = count;
        this.isUnival = isUnival;
    }
    return UnivalResult;
}());
// Main function to count the number of unival subtrees in a binary tree.
function countUnivalSubtrees(root) {
    return countUnivalSubtreesHelper(root).count;
}
// Helper function to recursively count unival subtrees and check if a subtree is unival.
function countUnivalSubtreesHelper(root) {
    // Base case: an empty tree is considered a unival tree.
    if (root === null) {
        return new UnivalResult(0, true);
    }
    // Recursively calculate the result for the left and right subtrees.
    var leftResult = countUnivalSubtreesHelper(root.left);
    var rightResult = countUnivalSubtreesHelper(root.right);
    // Check if the left and right subtrees are unival based on their results.
    var isLeftUnival = (root.left === null) || (root.val === root.left.val && leftResult.isUnival);
    var isRightUnival = (root.right === null) || (root.val === root.right.val && rightResult.isUnival);
    // Check if the current subtree is unival.
    var isCurrentUnival = isLeftUnival && isRightUnival;
    // Calculate the total count of unival subtrees.
    var totalCount = leftResult.count + rightResult.count + (isCurrentUnival ? 1 : 0);
    // Return the result for the current subtree.
    return new UnivalResult(totalCount, isCurrentUnival);
}
var root = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)));
var result = countUnivalSubtrees(root);
console.log(result);
