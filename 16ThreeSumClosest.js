/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let close = Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === target)
                return sum;
            else if (sum > target) {
                right--;
            }
            else {
                left++;
            }
            if (Math.abs(close - target) > Math.abs(sum - target)) {
                close = sum;
            }
        }
    }
    return close;
};