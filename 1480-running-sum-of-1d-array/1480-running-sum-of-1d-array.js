/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var summed = [];
    summed[0] = nums[0];
    for (i = 1; i < nums.length; i++) {
        summed[i] = summed[i - 1] + nums[i];
    }
    return summed;
};