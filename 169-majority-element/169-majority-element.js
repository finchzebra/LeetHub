/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var elements = {};
    for (var i = 0; i < nums.length; i++) {
        if (elements[nums[i]]) {
            elements[nums[i]] ++;
        } else {
            elements[nums[i]] = 1;
        }
        if (elements[nums[i]] > nums.length / 2) return nums[i];
    }
    return "Didn't find a majority element";
};