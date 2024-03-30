/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let arr = new Array(board.length)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(board[0].length)
  }
  let outs = [-1, 0, 1]
  for (let j = 0; j < board[0].length; j++) {
    for (let i = 0; i < board.length; i++) {
      let alive = 0
      for (let x = 0; x < outs.length; x++) {
        for (let y = 0; y < outs.length; y++) {
          if (x !== 1 || y !== 1) {
            let newI = i + outs[x]
            let newJ = j + outs[y]
            if (
              newI >= 0 &&
              newI < board.length &&
              newJ >= 0 &&
              newJ < board[0].length
            ) {
              alive += board[newI][newJ]
            }
          }
        }
      }
      if (alive < 2 || alive > 3) {
        arr[i][j] = 0
      } else if (alive === 3) {
        arr[i][j] = 1
      } else {
        arr[i][j] = board[i][j]
      }
    }
  }
  for (let j = 0; j < board[0].length; j++) {
    for (let i = 0; i < board.length; i++) {
      board[i][j] = arr[i][j]
    }
  }
}
gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
])
