/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = new Map()
  let col = new Map()
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        row.set(i, true)
        col.set(j, true)
      }
    }
  }
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (row.has(i) || col.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}
let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
setZeroes(matrix)
debugger
