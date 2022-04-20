// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLastWord = function(s) {
//     const words = s.trim().split(' ');
//     const lastWord = words.pop() || '';

//     return lastWord.length;
// };

//optimized solution
var lengthOfLastWord = function(s) {
    return s ? s.trim().split(' ').pop().length : 0;
};