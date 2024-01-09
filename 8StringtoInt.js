/*
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let str = parseInt(s, 10);
    //console.log(str);
    if (isNaN(str))
        return 0
    else {
        if (str < -(Math.pow(2, 31))) {
            return -(Math.pow(2, 31));
        }
        else if (str >= (Math.pow(2, 31))) {
            return (Math.pow(2, 31) - 1);
        }
        else {
            return str;
        }
    }
};