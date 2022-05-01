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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    let result = true;

    function helper(node1, node2) {
        if (!node1 && !node2) {
            result = false;
        }
    }

    return result;
    // if (root == null) {
    //     return true;
    // }
    
    // if (root.left = root.right) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    // root = root.left;
    
    // isSymmetric();
};