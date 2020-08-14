/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let results = [];
  let max = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      results.push(true);
    } else {
      results.push(false);
    }
  }

  return results;
};
