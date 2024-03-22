/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let filtered = nums.filter((e) => e != val);
  filtered.forEach((e, i) => (nums[i] = e));
  return filtered.length;
};
var arr = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(arr, 2);
console.log(arr);
