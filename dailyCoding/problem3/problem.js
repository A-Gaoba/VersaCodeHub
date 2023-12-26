// Good morning! Here's your coding interview problem for today.
var _a, _b;
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
function serialize(root) {
    if (!root) {
        return 'null';
    }
    var leftSerialized = serialize(root.left);
    var rightSerialized = serialize(root.right);
    return "".concat(root.val, ",").concat(leftSerialized, ",").concat(rightSerialized);
}
function deserialize(s) {
    var nodes = s.split(',');
    return deserializeHelper(nodes);
}
function deserializeHelper(nodes) {
    var val = nodes.shift();
    if (val === 'null' || val === undefined) {
        return null;
    }
    var node = new TreeNode(val);
    node.left = deserializeHelper(nodes);
    node.right = deserializeHelper(nodes);
    return node;
}
// Test
var node = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
var serializedNode = serialize(node);
console.log(serializedNode); // Serialized string representation of the tree
var deserializedNode = deserialize(serializedNode);
console.log((_b = (_a = deserializedNode === null || deserializedNode === void 0 ? void 0 : deserializedNode.left) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.val); // Output: 'left.left'
