/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let res = [];
    for(let i = 0; i < nums.length - 2; i++){
        if((i === 0) || nums[i] !== nums[i-1]){ // avoid the duplicate
            let lo = i + 1;
            let hi =  nums.length - 1;
            let sum = 0 - nums[i];
            while(lo < hi){
                if(nums[lo] + nums[hi] == sum){
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while((lo<hi) && (nums[lo] == nums[lo+1])) lo++; // this to check the other posibilities 
                    while((lo<hi) && (nums[hi] == nums[hi-1])) hi--;
                    lo++;
                    hi--;
                }
                else if(nums[lo] + nums[hi] < sum){
                    lo++;
                }
                else{
                    hi--;
                }
            }
        }
    }
    return res;
};