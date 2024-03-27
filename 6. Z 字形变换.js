/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }
  let length = 2 * numRows;
  let map = new Map();
  for (let i = 0; i < length - 2; i++) {
    let line = i < numRows ? i : 2 * numRows - i - 2;
    let next = i;
    while (next < s.length) {
      if (map.has(line)) {
        map.get(line).push([s[next], next]);
      } else {
        map.set(line, [[s[next], next]]);
      }
      next = next + 2 * (numRows - 2) + 2;
    }
  }
  let r = "";
  for (let i = 0; i < numRows; i++) {
    let layer = map.get(i);
    if (i !== 0 && i !== numRows - 1) {
      layer = layer.sort((a, b) => a[1] - b[1]);
    }
    r += layer.map((e) => e[0]).reduce((p, c) => p + c);
  }
  return r;
};

console.log(convert("ABCDEFGHIJK", 2));
