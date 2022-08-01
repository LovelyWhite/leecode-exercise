/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// out time limit
var minSteps = function (s, t) {
    let tArray = t.split('');
    return s.split('').filter(e => {
        let r = tArray.indexOf(e);
        if (r != -1) {
            tArray.splice(r, 1);
            return false;
        }
        return true
    }).length
};

var minSteps = function (s, t) {
    let v1 = new Array(26).fill(0);
    let v2 = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        v1[s[i].charCodeAt() - 97]++;
        v2[t[i].charCodeAt() - 97]++;
    }
    let max = 0;
    for (let i = 0; i < 26; i++) {
        max += Math.max(v1[i] - v2[i], 0);
    }
    return max;
};

minSteps("bab", "aba");