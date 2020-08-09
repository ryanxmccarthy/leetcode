/**
 * @param {string} s
 * @return {number}
 */

//brute force solution
var lengthOfLongestSubstring = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let set = new Set([char]);

    for (let j = 0; j < s.length; j++) {
      let char = s.charAt(j);
      if (set.has(char)) {
        break;
      } else {
        set.add(char);
      }

      count = Math.max(count, set.size);
    }
  }

  return count;
};

let result = lengthOfLongestSubstring("abcabcbb");
console.log(result);
