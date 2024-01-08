/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = '';
    if (numRows === 1) return s;
    for (let i = 0; i < numRows; i++) {
        if ((i == 0) || (i == (numRows - 1))) {
            let j = i;
            while (j < s.length) {
                res += s.charAt(j);
                j += (numRows - 1) * 2;
            }
        }
        else {
            let j = i;
            while (j < s.length) {
                let k = j;
                res += s.charAt(j);
                j += (numRows - 1) * 2;
                k += ((numRows - 1) * 2) - 2 * i;
                if (k < s.length) {
                    res += s.charAt(k);
                }
            }
        }
    }
    return res;
};