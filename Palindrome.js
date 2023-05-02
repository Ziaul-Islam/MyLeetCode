/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) return false;
    else if (x === reverse(x)) return true;
    else return false;
};

function reverse(n){
    let result = 0;
    let dig = 0;
    while(n != 0){
        dig = n % 10;
        result =  result * 10 + dig; 
        n = Math.floor(n/10);
    }
    console.log(result);
    return result;
}