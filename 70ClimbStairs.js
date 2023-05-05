/*
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*if(n == 1) return 1;
    else if(n == 2) return 2;
    else return (climbStairs(n - 1) + climbStairs(n - 2));*/
    let res = [];
    for(let i = 1; i <= n; i++){
        if((i == 1) || (i == 2)) res.push(i);
        else{
            res.push(res[(i-1)-1]+res[(i-2)-1]);
        }
    }
    return res[res.length-1]; 
};