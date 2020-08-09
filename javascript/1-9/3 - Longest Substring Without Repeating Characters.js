/**
 * @param {string} s
 * @return {number}
 */

//brute force solution
var lengthOfLongestSubstringBrute = function (s) {
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

//sliding window
var lengthOfLongestSubstringWindow = function (s) {
  let count = 0;
  let i = 0;
  let j = 0;
  let n = s.length;
  let set = new Set();

  while (i < n && j < n) {
    let char = s.charAt(j);
    if (!set.has(char)) {
      set.add(char);
      j++;
      count = Math.max(count, j - i);
    } else {
      set.delete(s.charAt(i));
      i++;
    }
  }

  return count;
};

console.log(lengthOfLongestSubstringBrute("abcabcbb"));
console.log(lengthOfLongestSubstringWindow("abcabcbb"));
