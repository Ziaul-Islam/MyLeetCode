/*
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {

    let sum = 0;
    let len = (mat.length - 1);
    for(let i in mat){
        for(let j in mat[i]){
            if((parseInt(i) + parseInt(j)) == len){
                sum += mat[i][j];
            }
            else if(j==i){
                sum += mat[i][j];
            }
        }
    }
    return sum
};