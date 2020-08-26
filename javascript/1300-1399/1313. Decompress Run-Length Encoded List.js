/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i+1];
        while (freq > 0) {
            output.push(val);
            freq--;
        }
    }
    return output;
};