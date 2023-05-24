/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n *(n + 1))/2;
    let actualSum = nums.reduce((acc, cur) => acc + cur);
    return expectedSum - actualSum;
};