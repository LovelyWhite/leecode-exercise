/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let result = []
  let key = new Map()
  for (let i = 0; i < words.length; i++) {
    if (key.has(words[i])) {
      key.set(words[i], key.get(words[i]) + 1)
    } else {
      key.set(words[i], 1)
    }
  }
  let wordlength = words.length * words[0].length
  let length = s.length - wordlength + 1
  for (let i = 0; i < length; i++) {
    let substr = s.slice(i, i + wordlength)
    let map = new Map()
    let flag = true
    for (
      let h = 0;
      h < substr.length - words[0].length + 1;
      h += words[0].length
    ) {
      let v = substr.slice(h, h + words[0].length)
      if (!key.has(v)) {
        flag = false
        break
      }
      if (map.has(v)) {
        map.set(v, map.get(v) + 1)
      } else {
        map.set(v, 1)
      }
    }
    if (!flag) {
      continue
    }
    if (map.size !== key.size) {
      continue
    }
    flag = true
    for (let k of map.keys()) {
      if (key.get(k) !== map.get(k)) {
        flag = false
        break
      }
    }
    if (flag) {
      result.push(i)
    }
  }
  return result
}

findSubstring('barfoothefoobarman', ['foo', 'bar'])
