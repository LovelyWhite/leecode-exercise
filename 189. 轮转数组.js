/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let start = 0;
  let length = nums.length;
  while (length > 0) {
    let currentNum = nums[start];
    let temp;
    let nowIndex = start;
    do {
      let nextIndex = (nowIndex + k) % nums.length;
      temp = nums[nextIndex];
      nums[nextIndex] = currentNum;
      currentNum = temp;
      nowIndex = nextIndex;
      length--;
    } while (start != nowIndex);
    start++;
  }
  console.log(nums);
};

rotate([-1, -100, 3, 99], 2);
