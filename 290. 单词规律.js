function inverse(obj) {
  var retobj = {};
  for (var key in obj) {
    retobj[obj[key]] = key;
  }
  return retobj;
}

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let kv = {};
  let words = s.split(" ");
  if (pattern.length != words.length) {
    return false;
  }
  for (let i = 0; i < words.length; i++) {
    if (!kv[pattern[i]]) {
      kv[pattern[i]] = words[i];
    }
  }
  kv = inverse(kv);
  let inversePattern = "";
  for (let i = 0; i < words.length; i++) {
    inversePattern += kv[words[i]];
  }
  return inversePattern === pattern;
};

console.log(wordPattern("abba", "dog dog dog dog"));
