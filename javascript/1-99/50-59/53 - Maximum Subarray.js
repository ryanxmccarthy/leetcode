/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let localMax = 0;
    let max = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < nums.length; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax);

        if (localMax > max) {
            max = localMax;
        }
    }

    return max;
};