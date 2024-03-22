/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) {
    return nums[0];
  }
  let midCount = nums.length / 2;
  nums = nums.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
      if (count > midCount) {
        return nums[i];
      }
    } else {
      count = 1;
    }
  }
};
console.log(majorityElement([2, 1, 2, 5, 2, 3, 3]));
