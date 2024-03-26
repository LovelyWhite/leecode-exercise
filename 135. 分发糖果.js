/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length === 1) {
    return 1;
  }
  let hashmap = new Map();
  ratings.forEach((v, i) => {
    if (hashmap.has(v)) {
      hashmap.get(v).push([v, i]);
    } else {
      hashmap.set(v, [[v, i]]);
    }
  });
  let hashmapArray = [];
  for (let i of hashmap.keys()) {
    hashmapArray.push(i);
  }
  hashmapArray.sort((a, b) => a - b);
  let countArray = new Array(ratings.length);
  while (hashmapArray.length > 0) {
    let minRating = hashmapArray.shift();
    let minRatings = hashmap.get(minRating);
    for (let item of minRatings) {
      let i = item[1];
      let v = item[0];
      if (
        (i === 0 && ratings[i + 1] >= v) ||
        (i === ratings.length - 1 && ratings[i - 1] >= v) ||
        (ratings[i - 1] >= v && ratings[i + 1] >= v)
      ) {
        countArray[i] = 1;
      } else {
        let l = ratings[i - 1];
        let r = ratings[i + 1];
        if (l < v && r < v) {
          countArray[i] = Math.max(countArray[i - 1], countArray[i + 1]) + 1;
        } else if (l < v) {
          countArray[i] = countArray[i - 1] + 1;
        } else {
          countArray[i] = countArray[i + 1] + 1;
        }
      }
    }
  }
  return countArray.reduce((p, c) => p + c);
};

console.log(candy([29, 51, 87, 87, 72]));
