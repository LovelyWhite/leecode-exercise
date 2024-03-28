/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // j 是前缀起始位置，i 是后缀起始位置
  let j = 0
  let next = [0]
  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle[i] != needle[j]) {
      j = next[j - 1]
    }
    if (needle[i] == needle[j]) {
      j++
    }
    next[i] = j
  }
  j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] == needle[j]) {
      if (j === needle.length - 1) {
        return i - j
      }
      j++
    }
  }
  return -1
}
console.log(strStr('aaa', 'aa'))
