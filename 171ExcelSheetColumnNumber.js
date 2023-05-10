/*
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let l =  columnTitle.length - 1;
    let sum = 0;
    let i = 0;
    for(i = 0; i < columnTitle.length - 1; i++ ){
      sum += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, l--);
    }
    //Adding the last element
    return sum + (columnTitle.charCodeAt(i) - 64);
}