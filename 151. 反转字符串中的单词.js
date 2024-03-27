/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let p = s.length - 1;
  let q = s.length - 1;
  let r = "";
  while (p >= 0) {
    if (s[p] !== " ") {
      q = p;
      while (p >= 0 && s[p] !== " ") {
        p--;
      }
      r += `${s.slice(p + 1, q + 1)} `;
    }
    p--;
  }
  return r.slice(0, r.length - 1);
};
console.log(reverseWords("  the   sky  is   blue   "));
