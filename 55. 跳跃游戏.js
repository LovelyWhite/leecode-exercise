/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0;
  let i = 0;
  while (max < nums.length - 1) {
    if (i > max) {
      return false;
    }
    max = Math.max(nums[i] + i, max);
    i++;
  }
  return true;
};

console.log(canJump([3, 2, 1, 0, 4]));
