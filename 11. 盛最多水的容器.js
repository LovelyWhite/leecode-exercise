/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0
  let j = height.length - 1
  let max = 0
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    height[i] <= height[j] ? i++ : j--
  }
  return max
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
