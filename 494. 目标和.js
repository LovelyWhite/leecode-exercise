/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let data = new Map();
    let result = memorySearch(nums, 0, target, data);
    console.log(data);
    return result;
};

var recursion = function (nums, index, rest) {
    if (index === nums.length) {
        return rest === 0 ? 1 : 0;
    }
    return recursion(nums, index + 1, rest - nums[index]) + recursion(nums, index + 1, rest + nums[index])
}


var memorySearch = function (nums, index, rest, data) {
    if (data.has(index) && data.get(index).has(rest)) {
        return data.get(index).get(rest);
    }
    let result;
    if (index === nums.length) {
        result = rest === 0 ? 1 : 0;
    }
    else {
        result = memorySearch(nums, index + 1, rest - nums[index], data) + memorySearch(nums, index + 1, rest + nums[index], data);
    }
    if (!data.has(index) || !data.get(index).has(rest)) {
        let i = data.get(index);
        if (i == undefined) {
            i = new Map();
        }
        i.set(rest, result);
        data.set(index, i);
    }
    return result;
}

/**
 * 1）数组全部变成非负数
 * 2）全部加起来 = sum，target 如果大于 sum 返回 0 种。
 * 3) 所有的数字加起来 如果 和 target 奇偶性不一样，返回 0 种。
 * 4）在全变成正数以后，分为两个集合 P = 正数集合 N = 负数集合  P - N = T
 *    P - N + P + N = T + P + N  -> 2P = T + sum
 *    P = (T + sum) / 2
 *    就是说在原有数组中任取 N 个数，让这 N 个数的 和 = (T + sum) / 2 的种类数，
 *    这样做的目的是减少常数时间，原有的 dp 规模是 0～index, -sum ~ +sum 转变为 0~index, 0~ (T + sum)/2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    nums.forEach(e => e = Math.abs(e)); // 全部变成正数
    let sum = nums.reduce((p, c) => p + c);
    target = Math.abs(target);
    if (sum < target || sum % 2 != target % 2) {
        return 0;
    }
    return dp(nums, (target + sum) / 2);
};

// 定义 dp[i][j] [0 - i] 个元素通过加减以后变成 j 的种类数
var dp = function (nums, target) {
    let dpArray = new Array(nums.length);
    for (let i = 0; i < dpArray.length; i++) {
        dpArray[i] = new Array(target + 1).fill(0)
    }
    dpArray[0][0] = 1;
    for (let i = 0; i < dpArray[0].length; i++) {
        dpArray[0][i] = dpArray[0][i] + (nums[0] == i ? 1 : 0)
    }
    for (let i = 1; i < dpArray.length; i++) {
        for (let j = 0; j < dpArray[0].length; j++) {
            if (nums[i] > j) dpArray[i][j] = dpArray[i - 1][j]
            else dpArray[i][j] = dpArray[i - 1][j] + dpArray[i - 1][j - nums[i]];
        }
    }
    return dpArray[nums.length - 1][target];
}


console.log(findTargetSumWays([100], -200))