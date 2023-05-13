/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let prod = 1;
    let output = new Array(n);
    for(let i = 0; i<n; i++){
        output[i] = prod;
        prod *= nums[i];
    }
    console.log(output);
    prod = 1;
    for(let i = n - 1; i >= 0; i--){
        output[i] *= prod;
        prod *= nums[i];
    }
    console.log(output);
    return output;
};