/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let rem = 0;
    let temp;
    for(let i in digits){
        temp = digits.pop();
        if (i == 0) temp++;
        temp += rem;
        rem = Math.floor(temp / 10); 
        temp %= 10;
        digits.unshift(temp);
    }
    if(rem !== 0) digits.unshift(rem);
    return digits;
    
};