/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    let i = 0;
    while(i < numRows){
        let row = [];
        for(let j = 0; j <= i; j++){
            if((j == 0) || (j == i))
                row.push(1);
            else if(i - 1 > 0){
                row.push(res[i - 1][j-1] + res[i - 1][j] )
            }
        }
        res.push(row);
        i++;
    }
    return res;
};