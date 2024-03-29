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
    const walk = (node, result) => {
        if (node === null) return []

        walk(node.left, result)

        walk(node.right, result)

        result.push(node.val)

        return result
    }

    return walk(root, [])
};