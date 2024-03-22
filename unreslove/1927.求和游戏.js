/**
 * @param {string} num
 * @return {boolean}
 * https://leetcode.cn/problems/sum-game/
 */
var sumGame = function (num) {
    let len = num.length / 2;
    let rightNums = num.split('');
    let leftNums = rightNums.splice(0, len)
    leftQues = leftNums.filter(e => e == '?');
    leftNums = leftNums.filter(e => e != '?');
    rightQues = rightNums.filter(e => e == '?');
    rightNums = rightNums.filter(e => e != '?');
    if ((leftQues.length + rightQues.length) % 2 != 0) {
        return true;
    }
    let leftSum = eval(leftNums.join('+'));
    let rightSum = eval(rightNums.join('+'));
    let quesNum = leftQues.length - rightQues.length;
    if (Math.abs(quesNum) >= 2) {
        return if();
    }
    let sumResult = leftSum - rightSum;
    return sumResult != 0;
};

console.log(sumGame("293?1948181?1234"))