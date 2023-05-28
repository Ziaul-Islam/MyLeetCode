/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let maxRight = 0, maxLeft = 0;
    let leftAr = height.map((_, i) =>
     i == 0? 0 : Math.max(...height.slice(0, i)));
    let rightAr = [...height];
    rightAr.reverse();
    rightAr = rightAr.map((_, i) =>
     i == 0? 0 : Math.max(...rightAr.slice(0, i)));
    rightAr.reverse();
    let waterStore = height.map((cur, i) =>{
        let min = Math.min(leftAr[i], rightAr[i]);
        if(min - cur >= 0)
        return (min - cur);
        else
        return 0;
    })
    return waterStore.reduce((acc, cur) => acc + cur);


    
};