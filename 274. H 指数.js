/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let maxHIndex = Math.min(citations[0], citations.length);
  if (maxHIndex === 0) {
    return 0;
  }
  while (true) {
    if (citations[maxHIndex - 1] >= maxHIndex) {
      return maxHIndex;
    }
    maxHIndex--;
  }
};

console.log(hIndex([4, 4, 0, 0]));
debugger;
