/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let res = []
  let i = 0
  while (i < words.length) {
    let curLen = 0
    let curCount = 0
    let whitespace = 0
    do {
      curLen += words[i].length
      curCount++
      whitespace = curCount > 1 ? curCount - 1 : 0
      i++
    } while (i < words.length && whitespace + curLen <= maxWidth)
    if (whitespace + curLen <= maxWidth) {
      let r = words.join(' ')
      res.push(r + ' '.repeat(maxWidth - r.length))
      return res
    } else {
      res.push(toString(words.splice(0, i - 1), maxWidth))
    }
    i = 0
  }
}
var toString = function (words, maxWidth) {
  let totalLength = words.map((e) => e.length).reduce((p, c) => p + c)
  let addedWhiteSpace = maxWidth - totalLength
  if (words.length === 1) {
    return words + ' '.repeat(addedWhiteSpace)
  }
  let res = ''
  let avg = Math.floor(addedWhiteSpace / (words.length - 1))
  let rest = addedWhiteSpace % (words.length - 1)
  for (let i = 0; i < words.length - 1; i++) {
    let count = avg + (rest-- > 0 ? 1 : 0)
    addedWhiteSpace -= count
    res += words[i] + ' '.repeat(count)
  }
  return res + words[words.length - 1]
}

fullJustify(
  [
    'Science',
    'is',
    'what',
    'we',
    'understand',
    'well',
    'enough',
    'to',
    'explain',
    'to',
    'a',
    'computer.',
    'Art',
    'is',
    'everything',
    'else',
    'we',
    'do',
  ],
  20
)
