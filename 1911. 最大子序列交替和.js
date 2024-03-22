var maxAlternatingSum = function (nums) {
    let dpArray = [];
    dpArray[0] = new Array(nums.length);
    dpArray[1] = new Array(nums.length);
    return dp(nums.length - 1, nums, dpArray);
};

// 前 i 项 nums 的交替和
var dp = function (index, nums, dpArray) {
    dpArray[0][0] = nums[0];
    dpArray[1][0] = 0;
    for (let i = 1; i < nums.length; i++) {
        dpArray[0][i] = Math.max(dpArray[1][i - 1] + nums[i], dpArray[0][i - 1])
        dpArray[1][i] = Math.max(dpArray[0][i - 1] - nums[i], dpArray[1][i - 1])
    }
    return dpArray[0][index];
}

console.log(maxAlternatingSum([5, 6, 7, 8]));