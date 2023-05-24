/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1; 
    let area = 0;
    while(left < right){
        let min = height[left] < height[right]? height[left] : height[right];
        let len =  right - left;
        //console.log(left+","+right);
        area = Math.max(area, (len * min));
        if(height[left] < height[right]) left++;
        else right--;
    }
    return area;
};