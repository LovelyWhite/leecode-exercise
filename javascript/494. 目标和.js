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


console.log(findTargetSumWays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3))