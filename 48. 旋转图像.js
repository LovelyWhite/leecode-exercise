/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 顺时针旋转过后的坐标：a->b
 * Xb = Ya
 * Yb = -Xa
 */
var rotate = function (matrix) {
  let array = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      array[`${i}-${j}`] = [i, j];
    }
  }

  while (Object.keys(array).length > 0) {
    let start = Object.values(array)[0];
    let currentIndex = start.slice(0);
    let currentValue = matrix[currentIndex[1]][currentIndex[0]];
    do {
      let nextIndex = [-currentIndex[1] + matrix.length - 1, currentIndex[0]];
      let tempValue = matrix[nextIndex[1]][nextIndex[0]];
      matrix[nextIndex[1]][nextIndex[0]] = currentValue;
      delete array[`${nextIndex[0]}-${nextIndex[1]}`];
      currentValue = tempValue;
      currentIndex = nextIndex;
    } while (start[0] !== currentIndex[0] || start[1] !== currentIndex[1]);
  }
};
let r = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(r);
console.log(r);
