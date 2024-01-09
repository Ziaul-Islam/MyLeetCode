/*
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 1;
    let revx = 0;
    if (x < 0) {
        sign = -1;
        x *= sign;
    }
    while (x > 0) {
        let rem = x % 10;
        revx = revx * 10 + rem;
        x = Math.floor(x / 10);
    }
    //console.log(Math.pow(2, 31));
    if ((sign == -1) && (revx > Math.pow(2, 31))) {
        return 0;
    }
    else if ((sign == 1) && (revx >= Math.pow(2, 31))){
        return 0;
    }
    else
        return (sign * revx);

};