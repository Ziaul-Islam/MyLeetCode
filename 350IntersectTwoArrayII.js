/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let counts = {};
    let res = new Array();
    nums1.forEach((el) => counts[el] = ++counts[el] || 1);

    for(let el of nums2){
      if(counts[el] && counts[el]>0){
            res.push(el);
            counts[el]--;
      }
    }
    return res;
};