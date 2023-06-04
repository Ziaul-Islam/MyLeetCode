/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let whites = 0, reds = 0, blues = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) reds++;
        else if(nums[i] === 1) whites++;
        else blues++;
    }
    for(let i = 0; i < nums.length; i++){
        if(i < reds) nums[i] = 0;
        else if( i < (reds + whites)) nums[i] = 1;
        else nums[i] = 2;
    }
};