/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let sum = 0;
    if (a.length < 53 && b.length < 53) {
        sum = parseInt(a, 2) + parseInt(b, 2)
        return sum.toString(2);
    } else {

    }  
};