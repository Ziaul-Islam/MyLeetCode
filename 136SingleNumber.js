/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //XOR duplicate will cancel each other
    let res = 0;
    for(let n of nums){
        res = res ^ n;
    }
    return res;
};