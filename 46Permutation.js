/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    permuteHelper(nums, [], result);
    return result;
};

var permuteHelper = function(nums, curPer, result){
    if(nums.length === 0){
        result.push(curPer);
        return;
    }
    for(let i in nums){
        let curNum = nums[i];
        remainingNums = nums.slice(0, Number(i)).concat(nums.slice(Number(i) + 1));
        permuteHelper(remainingNums, curPer.concat(curNum), result);
    }
}