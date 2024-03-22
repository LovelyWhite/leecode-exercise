/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (nums[mid] > target) {
            end = mid - 1;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
        else
            return mid;
    }
    return -1;
};
console.log(search([1,2,3,4], 4))