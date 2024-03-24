/**
 * @param {string} s
 * @return {string}
 * 定义 i j dp[i][j] 为 i->j 长度的串是否为回文串
 * dp[i][j] 的是否为回文串依赖于 dp[i+1][j-1] 以及 i j 是否相同
 *
 */
var longestPalindrome = function (s) {
  let dpArray = new Array(s.length);
  for (let i = 0; i < dpArray.length; i++) {
    dpArray[i] = new Array(s.length).fill(false);
  }
  let length = 0;
  let longestText = "";
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i < 2) {
          dpArray[i][j] = true;
        } else {
          dpArray[i][j] = dpArray[i + 1][j - 1] && true;
        }
        if (dpArray[i][j] && j - i + 1 > length) {
          length = j - i + 1;
          longestText = s.slice(i, j + 1);
        }
      }
    }
  }
  return longestText;
};

longestPalindrome("aacabdkacaa");
