/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length; 
    let arr = new Array();
    let i = 0, j = 0;
    while((i < m) && (j < n)){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i]);
            i++;
        }
        else{
            arr.push(nums2[j]);
            j++;
        }
    }
    while(i < m) 
        arr.push(nums1[i++]);
    while(j < n)
        arr.push(nums2[j++]);
    if((m+n)%2 == 0){
        let mid = (m + n)/2;
        let p = arr[mid];
        let q = arr[mid - 1];
        return ((p + q)/2);
    }
    else{
        return arr[Math.floor((m + n)/2)];
    }
        
};