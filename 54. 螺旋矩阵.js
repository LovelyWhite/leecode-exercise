/**
 * right:0 down:1 left:2 up:3
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let direction = 0;
  let i = 0;
  let j = 0;
  let height = matrix.length;
  let width = matrix[0].length;
  let count = width * height;
  let array = [];
  while (count--) {
    array.push(matrix[i][j]);
    matrix[i][j] = undefined;
    let tempI = i;
    let tempJ = j;
    switch (direction) {
      case 0:
        tempJ++;
        break;
      case 1:
        tempI++;
        break;
      case 2:
        tempJ--;
        break;
      case 3:
        tempI--;
    }
    if (
      tempI == height ||
      tempJ == width ||
      tempI == -1 ||
      tempJ == -1 ||
      matrix[tempI][tempJ] === undefined
    ) {
      direction = (direction + 1) % 4;
      switch (direction) {
        case 0:
          j++;
          break;
        case 1:
          i++;
          break;
        case 2:
          j--;
          break;
        case 3:
          i--;
      }
    } else {
      i = tempI;
      j = tempJ;
    }
  }
  return array;
};
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
