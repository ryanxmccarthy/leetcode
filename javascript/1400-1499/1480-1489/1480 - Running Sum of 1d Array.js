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

//reduce solution
var runningSum = function (nums) {
  let sum = 0;
  return nums.reduce((res, item) => {
    res.push((sum += item));
    return res;
  }, []);
};

//map solution
var runningSum = function (nums) {
  let sum = 0;
  return nums.map((x) => {
    sum += x;
    return sum;
  });
};
