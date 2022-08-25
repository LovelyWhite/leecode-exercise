/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    let n = costs.length / 2;
    return reduce(costs, 0, n);
};

var reduce = function (costs, i, leftTime) {
    if (i == costs.length) {
        return 0;
    }
    if (leftTime == 0) {
        return costs[i][1] + reduce(costs, i + 1, leftTime);
    }
    if (costs.length - i == leftTime) {
        return costs[i][0] + reduce(costs, i + 1, leftTime - 1);
    }
    return Math.min(costs[i][0] + reduce(costs, i + 1, leftTime - 1), costs[i][1] + reduce(costs, i + 1, leftTime));
}

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    let n = costs.length / 2;
    return dp(costs, 0, n);
};

// i： 0 - costs.length
// leftTime: costs.length/2

var dp = function (costs, i, n) {
    let dpArray = new Array(costs.length + 1);
    for (let i = 0; i < dpArray.length; i++) {
        dpArray[i] = new Array(n + 1).fill(0);
    }
    for (let i = dpArray.length - 2; i >= 0; i--)
        for (let j = 0; j < n + 1; j++) {
            if (j == 0) {
                dpArray[i][j] = costs[i][1] + dpArray[i + 1][j];
            }
            else if (costs.length - i == j) {
                dpArray[i][j] = costs[i][0] + dpArray[i + 1][j - 1];
            }
            else {
                dpArray[i][j] = Math.min(costs[i][0] + dpArray[i + 1][j - 1], costs[i][1] + dpArray[i + 1][j]);
            }
        }
    return dpArray[i][n];
}


let costs = [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]];
console.log(twoCitySchedCost(costs));
