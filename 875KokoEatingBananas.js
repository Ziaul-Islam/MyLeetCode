/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let res = r;
    while(l <= r){
        let k = Math.floor((r + l)/2);
        let hours = 0;
        for(let i in piles){
            hours += Math.ceil(piles[i]/k);
        }
        if(hours <= h){
            res = res > k ? k : res;
            r = k - 1;
        }
        else{
            l = k + 1;
        }
    }
    return res;
};