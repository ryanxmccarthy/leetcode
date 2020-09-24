/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  const res = [];
  let left = 0,
    right = 0;
  for (let i = 0; i < S.length; i++) {
    S[i] === "(" ? left++ : right++;
    if (left === right) {
      left = right = 0;
    }
    if (1 < left) {
      res.push(S[i]);
    }
  }
  return res.join("");
};
