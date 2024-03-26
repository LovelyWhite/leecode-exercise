/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let p = [nums[0]];
  let q = [nums[nums.length - 1]];
  let r = new Array(nums.length);
  for (let i = 1; i < nums.length; i++) {
    p[i] = nums[i] * p[i - 1];
    q[i] = nums[nums.length - i - 1] * q[i - 1];
  }
  r[0] = q[nums.length - 2];
  r[nums.length - 1] = p[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++) {
    r[i] = p[i - 1] * q[nums.length - i - 2];
  }
  return r;
};
console.log(productExceptSelf([1, 2, 3, 4]));
