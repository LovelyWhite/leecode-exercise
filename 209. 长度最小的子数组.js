/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0
  let i = 0
  let j = 0
  let res = 10e5 + 1
  while (j < nums.length) {
    sum += nums[j]
    while (sum >= target) {
      res = Math.min(res, j - i + 1)
      sum -= nums[i]
      i++
    }
    j++
  }
  return res === 10e5 + 1 ? 0 : res
}
console.log(minSubArrayLen(0, []))
