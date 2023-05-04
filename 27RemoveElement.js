/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0
    //push toward left
    for(let cur in nums){
        if(nums[cur] != val){
            nums[index++] = nums[cur]
        }
    }
    return index;
    
};
console.log(removeElement([3,2,2,3], 3));
