/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function(root) {
    let result = [];
    if (root) {
        post(root, result);
    }
    return result;
};

function post(node, result) {
    if (node) {
        if (node.left) {
            post(node.left, result);
        }
        if (node.right) {
            post(node.right, result);
        }
        result.push(node.val);
    }
}
