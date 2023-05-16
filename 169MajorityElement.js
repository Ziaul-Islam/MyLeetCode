/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let i;
    for(i of nums){
        if(map[i] == undefined){
            map[i] = 1;
        }
        else if (++map[i] > Math.floor(nums.length / 2))
            return i;
    }
    return i;
};