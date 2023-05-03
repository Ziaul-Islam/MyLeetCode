/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let object = {};
    for(let i in nums){
            if(object[(nums[i])] == undefined){
                object[(target - nums[i])] = i;
            }
            else{
                let first = i;
                let second = nums.indexOf(target - nums[i]);
                if (second != -1 ){
                    return [first, second];
                }
            }
    }
};