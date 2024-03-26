/**
 * 超时
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] === 0) {
      continue;
    }
    let curIndex = i;
    let restGas = gas[i];
    while (true) {
      if (restGas < cost[curIndex]) {
        break;
      }
      let nextIndex = (curIndex + 1) % gas.length;
      if (nextIndex === i && restGas >= cost[curIndex]) {
        return i;
      }
      restGas = restGas + gas[nextIndex] - cost[curIndex];
      curIndex = nextIndex;
    }
  }
  return -1;
};

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalRest = 0;
  let currentRest = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalRest += gas[i] - cost[i];
    currentRest += gas[i] - cost[i];
    if (currentRest < 0) {
      currentRest = 0;
      start = i + 1;
    }
  }
  if (totalRest >= 0) {
    return start;
  } else {
    return -1;
  }
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
