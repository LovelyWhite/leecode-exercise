/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let len = columnTitle.length;
    let num10 = 0;
    for (let i = 0; i < len; i++)
        num10 += Math.pow(26, len - i - 1) * (columnTitle[i].charCodeAt(0) - 64)
    return num10;
};

console.log(titleToNumber('AB'))