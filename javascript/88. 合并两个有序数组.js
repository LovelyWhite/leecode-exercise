/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1InsertIndex = 0;
  let addedCount = 0;
  for (let i = 0; i < n; i++) {
    let curNum = nums2[i];
    let flag = true;
    for (let j = nums1InsertIndex; j < m + addedCount; j++) {
      if (curNum <= nums1[j]) {
        nums1.splice(j, 0, curNum);
        nums1InsertIndex = j;
        flag = false;
        break;
      }
    }
    if (flag) {
      nums1[m + addedCount] = curNum;
      nums1InsertIndex = m + addedCount;
    }
    addedCount++;
  }
  nums1.length = m + n;
};

var array = [1];
merge(array, 1, [], 0);
console.log(array);
