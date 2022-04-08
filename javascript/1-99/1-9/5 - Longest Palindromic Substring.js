//Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length < 1) return '';

    let longestPalindrome = '';

    var getLongestPalindrome = function (leftPosition, rightPosition) {
        while ( 
            leftPosition >= 0 &&
            rightPosition < s.length &&
            s[leftPosition] === s[rightPosition]
        ) {
            leftPosition--;
            rightPosition++;
        }

        if
    }
};