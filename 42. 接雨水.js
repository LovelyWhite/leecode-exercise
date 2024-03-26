/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = [0];
  let r = [0];
  let lMax = 0;
  let rMax = 0;
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    l[i] = lMax = Math.max(height[i], lMax);
    r[height.length - i - 1] = rMax = Math.max(
      height[height.length - i - 1],
      rMax
    );
  }
  for (let i = 1; i < height.length - 1; i++) {
    sum += Math.min(l[i], r[i]) - height[i];
  }
  return sum;
};
console.log(trap([4, 2, 0, 3, 2, 5]));
