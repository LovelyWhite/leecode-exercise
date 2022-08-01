/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1;
        let end = n;
        mid = start;
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return isBadVersion(1) ? 1 : 2;
        }
        while (end - start > 1) {
            let mid = parseInt((start + end) / 2);
            let isBad = isBadVersion(mid);
            if (isBad) {
                end = mid;
            }
            else {
                start = mid;
            }
        }
        return isBadVersion(start) ? start : end;
    };
};