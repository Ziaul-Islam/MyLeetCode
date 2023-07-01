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
var preorderTraversal = function(root) {
    let result = [];
    preOrder(root, result);
    return result;
};
function preOrder(node, result){
    if(node){
        result.push(node.val);
        preOrder(node.left, result);
        preOrder(node.right, result);
    }
    return;
};