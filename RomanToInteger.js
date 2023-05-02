/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let rom ={
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
        };
    let num = 0;
    let arr = [...s];
    for(let i = 0; i < arr.length; i++){
        if (i < (arr.length -1)){
            if(((arr[i] == 'I') && ((arr[i + 1] == 'V') || (arr[i + 1] == 'X'))) ||
                ((arr[i] == 'X') && ((arr[i + 1] == 'L') || (arr[i + 1] == 'C'))) ||
                ((arr[i] == 'C') && ((arr[i + 1] == 'D') || (arr[i + 1] == 'M')))) {
                num += rom[arr[i + 1]] - rom[arr[i]];
                i++;
            }
            else{
                num += rom[arr[i]];
            }
        }
        else{
            num += rom[arr[i]];
        }
        
    }
    return num;
};