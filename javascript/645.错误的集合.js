/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let theSame = -1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === nums[j + 1]) {
      theSame = nums.splice(j, 1)[0];
      break;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [theSame, i + 1];
    }
  }
  return [theSame, nums.length + 1];
};
