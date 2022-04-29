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
    let node = root;
    const result = [];

    while (node) {
        if (!node.left) {
            result.push(node.val)
            node = node.right
        } else {
            const pred = findPredecessor(node)
            if (pred.right === node) {
                pred.right = null;
                result.push(node.val)
            }
        }
    }
};

function findPredecessor(root) {
    let node = root.left
    while(node.right && node.right !== root) {
        node = node.right
    }

    return node
}