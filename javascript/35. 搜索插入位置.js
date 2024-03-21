/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((r - l) / 2) + l;
    if (target <= nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};
console.log(searchInsert([1, 3, 5, 6], 7));
