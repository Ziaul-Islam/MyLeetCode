/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [...s];
    let seq = [];
    for(let i in arr){
        if((arr[i] == '(') || (arr[i] == '{') || (arr[i] == '[')){
            seq.push(arr[i]);
        }
        else{
            let ch = seq.pop();
            if(((arr[i] == ')') && (ch == '(')) ||
                ((arr[i] == '}') && (ch == '{')) ||
                ((arr[i] == ']') && (ch == '['))
                ) continue;
            return false;
        }
    }
    return seq.length == 0;
};