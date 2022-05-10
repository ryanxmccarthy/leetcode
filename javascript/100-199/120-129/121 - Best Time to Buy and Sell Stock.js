/**
 * @param {number[]} prices
 * @return {number}
 */

//solved but not optimized
//  var maxProfit = function(prices) {
//     let maxProf = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             maxProf = Math.max(maxProf, prices[j] - prices[i]);
//         }
//     }

//     return maxProf;
// };

var maxProfit = function(prices) {
    let maxProf = 0;
    let min = Infinity;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxProf = Math.max(maxProf, prices[i] - min)
    }

    return maxProf;
};