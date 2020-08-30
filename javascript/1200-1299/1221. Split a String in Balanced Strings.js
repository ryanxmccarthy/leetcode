/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s, ans = 0) {
    for (let i = 0, L = 0, R = 0; i < s.length; i++) {
        L = s[i] == 'L' ? L + 1 : L;
        R = s[i] == 'R' ? R + 1 : R;
        if (L == R)
            ans++;
    }
    return ans;
};