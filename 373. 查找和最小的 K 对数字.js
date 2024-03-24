/**
 * 解法1: 遍历所有数对 -> 排序
 * 大顶堆和小顶堆
 * 对于任意结点 i:
 * 父结点:(i-1)/2
 * 左孩子:(i*2)+1
 * 右孩子:(i*2)+2
 */

/**
 * 维护堆排序
 * @param {number[]} nums 数组
 * @param {number} i 待维护的数组下标
 */
var heapify = function (nums, i) {
  let l = i * 2 + 1;
  let r = l + 1;
  let temp;
  let minest = i;
  if (l < nums.length && nums[l][0] < nums[i][0]) {
    minest = l;
  }
  if (r < nums.length && nums[r][0] < nums[minest][0]) {
    minest = r;
  }
  if (minest !== i) {
    temp = nums[minest];
    nums[minest] = nums[i];
    nums[i] = temp;
    heapify(nums, minest);
  }
};

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number} k
//  * @return {number[][]}
//  */
// var kSmallestPairs = function (nums1, nums2, k) {
//   let arr = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       arr.push([nums1[i] + nums2[j], [nums1[i], nums2[j]]]);
//     }
//   }
//   let res = [];
//   for (let i = 0; i < k && i < nums1.length * nums2.length; i++) {
//     res.push(arr[0][1]);
//     arr[0] = arr[arr.length - 1];
//     arr.pop();
//     heapify(arr, 0);
//   }
//   return res;
// };

var kSmallestPairs = function (nums1, nums2, k) {
  let arr = [[nums1[0] + nums2[0], [0, 0]]];
  let hash = {};
  let res = [];
  let count = 0;
  while (count < k) {
    // 堆排序
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
      heapify(arr, i);
    }
    let shiftElement = arr.shift();
    let shiftPair = shiftElement[1];
    if (
      !hash[`${shiftPair[0] + 1}-${shiftPair[1]}`] &&
      shiftPair[0] + 1 < nums1.length
    ) {
      arr.push([
        nums1[shiftPair[0] + 1] + nums2[shiftPair[1]],
        [shiftPair[0] + 1, shiftPair[1]],
      ]);
      hash[shiftPair[0] + 1 + "-" + shiftPair[1]] = true;
    }
    if (
      !hash[`${shiftPair[0]}-${shiftPair[1] + 1}`] &&
      shiftPair[1] + 1 < nums2.length
    ) {
      arr.push([
        nums1[shiftPair[0]] + nums2[shiftPair[1] + 1],
        [shiftPair[0], shiftPair[1] + 1],
      ]);
      hash[shiftPair[0] + "-" + (shiftPair[1] + 1)] = true;
    }
    if (nums1[shiftPair[0]] === undefined) {
      debugger;
    }
    res.push([nums1[shiftPair[0]], nums2[shiftPair[1]]]);
    count++;
  }
  return res;
};
console.log(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 20));
debugger;
