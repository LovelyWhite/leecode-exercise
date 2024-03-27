/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let count = 0;
  while (true) {
    let str = "";
    for (let i = 0; i < strs.length; i++) {
      str += strs[i].charAt(count);
    }
    if (str.length != strs.length || !isAllSameCharacter(str)) {
      return strs[0].slice(0, count);
    }
    count++;
  }
};

function isAllSameCharacter(str) {
  const firstChar = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i) !== firstChar) {
      return false;
    }
  }
  return true;
}

console.log(longestCommonPrefix(["flower", "f", "floght"]));
