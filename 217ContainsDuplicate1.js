/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let i of nums){
        if(map[i] != undefined) return true;
        else map[i] = true;
    }
    return false;
};