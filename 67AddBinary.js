/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let sum = 0;
    let res = '';
    while((i >= 0) || (j >= 0)){
        sum = carry;
        if(i >= 0) sum += parseInt(a.charAt(i--));
        if(j >= 0) sum += parseInt(b.charAt(j--));
        carry = sum > 1? 1 : 0;
        //carry one if sum is 2,3
        res += '' + (sum%2);
    }
    if(carry != 0 ) res += ''+carry;
    return (res+'').split('').reverse().join('');

};