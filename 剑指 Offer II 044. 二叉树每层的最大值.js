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
var largestValues = function (root) {
    if (!root) {
        return [];
    }
    let arr = [], queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let maxValue = -Infinity;
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            maxValue = Math.max(node.val, maxValue)
        }
        arr.push(maxValue);
    }
    return arr;
};