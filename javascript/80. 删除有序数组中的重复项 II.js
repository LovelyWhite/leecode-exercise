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
  let found = false;
  let flag = false;
  while (check < numsLength) {
    if (nums[check - 1] !== nums[check]) {
      found = true;
      nums[++keep] = nums[check];
      if (check !== numsLength - 1 && nums[check] === nums[check + 1]) {
        nums[++keep] = nums[check + 1];
      }
      flag = false;
    }
    check++;
    if (!flag && !found) {
      keep++;
      flag = true;
    }
  }
  console.log(nums);
  return found ? keep + 1 : 2;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
