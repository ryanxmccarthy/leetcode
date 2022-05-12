/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    //solution using hashtable
    const ht = {};

    for (const num of nums) {
        ht[num] = ht[num] + 1 || 1; 
    }

    for (const key in ht) {
        if (ht[key] === 1) {
            return key;
        }
    }
};