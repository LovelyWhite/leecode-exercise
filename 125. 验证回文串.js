/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0
  let j = s.length - 1
  while (i < s.length) {
    while (
      i < s.length &&
      !(
        (s[i] >= 'a' && s[i] <= 'z') ||
        (s[i] >= 'A' && s[i] <= 'Z') ||
        (s[i] >= '0' && s[i] <= '9')
      )
    ) {
      i++
    }
    while (
      j >= 0 &&
      !(
        (s[j] >= 'a' && s[j] <= 'z') ||
        (s[j] >= 'A' && s[j] <= 'Z') ||
        (s[j] >= '0' && s[j] <= '9')
      )
    ) {
      j--
    }
    if (i === s.length || j === -1) {
      return true
    }
    if (s[i].toUpperCase() != s[j].toUpperCase()) {
      return false
    }
    i++
    j--
  }
  return true
}
console.log(isPalindrome("v' 5:UxU:5 v'"))
