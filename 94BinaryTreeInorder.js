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
var inorderTraversal = function(root) {
    let result = [];
    inOrder(root, result);
    return result;
};

function inOrder(node, result){
    if(node){
        inOrder(node.left, result);
        result.push(node.val);
        inOrder(node.right, result);
    }
    return;
}