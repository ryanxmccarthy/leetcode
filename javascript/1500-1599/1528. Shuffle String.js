/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let returnStr = new Array(indices.length);
  for (let i = 0; i < s.length; i++) {
    returnStr[indices[i]] = s[i];
  }
  return returnStr.join("");
};
