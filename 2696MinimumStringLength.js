/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let ar = s.split("");
    let index  = 0;
    while(index < ar.length - 1){
        if((ar[index] === 'A' && ar[index + 1] === 'B') || (ar[index] === 'C' && ar[index + 1] === 'D')){
            ar.splice(index, 2);
            index = index === 0? 0 : index - 1;
        }
        else{
            index++;
        }
    }
    return ar.length;
};