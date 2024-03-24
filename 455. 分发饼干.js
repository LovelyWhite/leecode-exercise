/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let j = g.length - 1;
  for (let i = s.length - 1; i >= 0; i--) {
    while (j >= 0) {
      if (s[i] >= g[j]) {
        count++;
        j--;
        break;
      }
      j--;
    }
  }
  return count;
};
console.log(
  findContentChildren(
    [6, 2, 3, 1, 2, 3, 4, 5, 2, 3],
    [7, 1, 3, 4, 2, 1, 5, 2, 3]
  )
);
debugger;
