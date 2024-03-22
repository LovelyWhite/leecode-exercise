/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let memory = new Array(word1.length + 1);
    for (let i = 0; i < memory.length; i++) {
        memory[i] = new Array(word2.length + 1).fill(-1);
    }
    let result = dfs(word1, word2, word1.length, word2.length, memory);
    return result;
};
var dfs = function (word1, word2, i, j, memory) {
    if (memory[i][j] != -1) {
        return memory[i][j];
    }
    if (i == 0) {
        memory[i][j] = j;
        return j;
    }
    if (j == 0) {
        memory[i][j] = i;
        return i;
    }
    let p1 = dp(word1, word2, i, j - 1, memory) + 1;
    let p2 = dp(word1, word2, i - 1, j, memory) + 1;
    let p3 = dp(word1, word2, i - 1, j - 1, memory) + (word1[i - 1] == word2[j - 1] ? 0 : 1);
    memory[i][j] = Math.min(p1, p2, p3);
    return memory[i][j];
}

console.log(minDistance("abe", "ade"));