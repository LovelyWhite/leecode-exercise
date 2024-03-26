var map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      sum += map[s[i]];
      continue;
    }
    if (map[s[i + 1]] > map[s[i]]) {
      sum = sum - map[s[i]] + map[s[i + 1]];
      i++;
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
