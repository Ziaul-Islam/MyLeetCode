/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    if(nums.length == 0) return 0;
    for(let cur = 1; cur < nums.length; cur++){
        if(nums[i] != nums[cur]){
            nums[++i] = nums[cur];
        }
    }
    return i + 1;
    
};