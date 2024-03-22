/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let array = [root];
  let traversal = [];
  let countArray = [1];
  let count = 1;
  let output = [];
  while (array.length > 0) {
    while (count--) {
      let node = array.shift();
      traversal.push(node.val);
      if (node.left) {
        array.push(node.left);
      }
      if (node.right) {
        array.push(node.right);
      }
    }
    count = array.length;
    if (count == 0) {
      break;
    }
    countArray.push(count);
  }
  while (countArray.length > 0) {
    let count = countArray.shift();
    let countCopy = count;
    let sum = 0;
    while (count--) {
      sum += traversal.shift();
    }
    output.push(sum / countCopy);
  }
  return output;
};

let root = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(15), new TreeNode(7)),
  new TreeNode(20)
);
averageOfLevels(root);
