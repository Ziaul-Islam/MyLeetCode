/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Array();
    for(let i of nums1){
        if(nums2.includes(i)){
            if(!res.includes(i)){
                res.push(i);
            }
        }
    }
    return res;
};