/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let i = 0
  let j = 0
  let minWidth = s.length
  let range
  let need = new Map()
  for (i = 0; i < t.length; i++) {
    if (need.has(t[i])) {
      need.set(t[i], need.get(t[i]) + 1)
    } else {
      need.set(t[i], 1)
    }
  }
  i = 0
  while (j < s.length) {
    if (need.has(s[j])) {
      need.set(s[j], need.get(s[j]) - 1)
    }
    while (contains(need)) {
      if (minWidth > j - i) {
        minWidth = j - i
        range = [i, j + 1]
      }
      if (need.has(s[i])) {
        need.set(s[i], need.get(s[i]) + 1)
      }
      i++
    }
    j++
  }
  return range === undefined ? '' : s.slice(range[0], range[1])
}
var contains = function (map) {
  for (let i of map.values()) {
    if (i > 0) {
      return false
    }
  }
  return true
}
console.log(minWindow('abcabdebac', 'cda'))
