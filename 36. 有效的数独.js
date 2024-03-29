/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let j = 0; j < board.length; j++) {
    let hash = new Map()
    for (let i = 0; i < board[0].length; i++) {
      if (board[i][j] === '.') continue
      if (hash.has(board[i][j])) {
        return false
      }
      hash.set(board[i][j], true)
    }
  }
  for (let j = 0; j < board.length; j++) {
    let hash = new Map()
    for (let i = 0; i < board[0].length; i++) {
      if (board[j][i] === '.') continue
      if (hash.has(board[j][i])) {
        return false
      }
      hash.set(board[j][i], true)
    }
  }
  let arr = []
  for (let i = 0; i < 9; i++) {
    arr[i] = new Map()
  }
  for (let j = 0; j < board.length; j++) {
    for (let i = 0; i < board[0].length; i++) {
      if (board[i][j] === '.') continue
      let hash = arr[Math.floor(j / 3) + Math.floor(i / 3) * 3]
      if (hash.has(board[i][j])) {
        return false
      }
      hash.set(board[i][j], true)
    }
  }
  return true
}

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
)
