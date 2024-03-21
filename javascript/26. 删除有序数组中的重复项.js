/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let numsLength = nums.length;
  if (numsLength === 0) {
    return 0;
  }
  let check = 1;
  let keep = 0;
  while (check < numsLength) {
    if (nums[check - 1] != nums[check]) {
      nums[++keep] = nums[check];
    }
    check++;
  }
  return keep + 1;
};
console.log(removeDuplicates([0, 1, 1, 1, 1, 2, 2, 3, 3, 4]));
