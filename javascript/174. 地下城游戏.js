/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function (dungeon) {
    let dpArray = new Array(dungeon.length);
    for (let i = 0; i < dpArray.length; i++) {
        dpArray[i] = new Array(dungeon[0].length);
    }
    return dp(0, 0, dungeon, dpArray)
};


/**
 * 返回从 (i,j) -> 终点所需最低处初始健康点数 
 * @param {number} i
 * @param {number} j 
 * @param {number[][]} dungeon 
 * @param {number[][]} dpArray 
 */
function dp(x, y, dungeon, dpArray) {
    let hoz = dpArray.length;
    let col = dpArray[0].length;
    for (let i = hoz - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            dpArray[i][j] = Math.max(Math.min(getValue(i + 1, j, dpArray), getValue(i, j + 1, dpArray)) - dungeon[i][j], 1);
        }
    }
    return dpArray[x][y];
}

function getValue(i, j, dpArray) {
    let hoz = dpArray.length;
    let col = dpArray[0].length;
    if (i == hoz && j == col - 1 || i == hoz - 1 && j == col) {
        return 1;
    }
    if (i >= hoz || j >= col) {
        return Infinity;
    }
    return dpArray[i][j];
}