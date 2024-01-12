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
var UnivalResult = /** @class */ (function () {
    function UnivalResult(count, isUnival) {
        this.count = count;
        this.isUnival = isUnival;
    }
    return UnivalResult;
}());
function countUnivalSubtrees(root) {
    return countUnivalSubtreesHelper(root).count;
}
function countUnivalSubtreesHelper(root) {
    if (root === null) {
        return new UnivalResult(0, true);
    }
    var leftResult = countUnivalSubtreesHelper(root.left);
    var rightResult = countUnivalSubtreesHelper(root.right);
    var isLeftUnival = (root.left === null) || (root.val === root.left.val && leftResult.isUnival);
    var isRightUnival = (root.right === null) || (root.val === root.right.val && rightResult.isUnival);
    var isCurrentUnival = isLeftUnival && isRightUnival;
    var totalCount = leftResult.count + rightResult.count + (isCurrentUnival ? 1 : 0);
    return new UnivalResult(totalCount, isCurrentUnival);
}
// Example usage:
var root = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)));
var result = countUnivalSubtrees(root);
console.log(result);
