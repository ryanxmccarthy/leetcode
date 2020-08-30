/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split(''),
        addSum = 0,
        timesSum = 1;
    for (let i = 0; i < arr.length; i++) {
        addSum += parseInt(arr[i]);
        timesSum *= arr[i];
    }
    return (timesSum - addSum);
};