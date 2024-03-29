/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) {
    return 0
  }
  let i = 0
  let j = 1
  let map = new Map()
  map.set(s[i], 0)
  let max = 1
  while (true) {
    if ((map.has(s[j]) && map.get(s[j]) >= i) || j === s.length) {
      max = Math.max(max, j - i)
      i = map.get(s[j]) + 1
      map.delete(s[j])
    }
    if (j === s.length) {
      break
    }
    map.set(s[j], j)
    j++
  }
  return max
}
console.log(lengthOfLongestSubstring('pwwkew'))
