/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let runningSums = [];
  let runningSum = 0;
  for (var i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    runningSums.push(runningSum);
  }
  return runningSums;
};

//optimized solution
