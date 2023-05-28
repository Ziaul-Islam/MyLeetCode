/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height){
    if (height === undefined) return ;
    console.log('hello');
    let maxL = height[0];
    let maxR = height[height.length - 1]
    let l = 0, r = height.length - 1;
    let watertrap = 0;
    while(l < r){
        let sec = 0;
        if(height[l] < height[r]){
            l++;
            sec = Math.min(maxL, maxR) - height[l];
            watertrap += sec > 0 ? sec : 0;
            
        }
        else{
            r--;
            sec = Math.min(maxL, maxR) - height[r];
            watertrap += sec > 0 ? sec : 0; 
        }
        maxR = height[r] > maxR ? height[r] : maxR;
        maxL = height[l] > maxL ? height[l] : maxL;
        //console.log("l "+l+" r "+r);
        //console.log("maxL : "+maxL+" maxR : "+maxR);
        //console.log(watertrap);
    }
    return watertrap;
};