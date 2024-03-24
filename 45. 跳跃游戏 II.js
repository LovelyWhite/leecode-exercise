/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curIndex = nums.length - 1;
  let count = 0;
  while (curIndex > 0) {
    for (let i = 0; i <= curIndex - 1; i++) {
      const element = nums[i];
      if (i + nums[i] >= curIndex) {
        count++;
        curIndex = i;
      }
    }
  }
  return count;
};

console.log(jump([2, 3, 0, 1, 4]));
