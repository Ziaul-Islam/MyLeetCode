/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = strs[0];
    let res = "";
    let sub = "";
    const checkSubString = (element) =>{
        return (sub === element.substring(0, sub.length));
    }
    for(let i = 1; i <= s.length; i++){
        sub = s.substring(0, i);
        if((strs.every(checkSubString)))
        
            res = sub;
        
        else break;
    }
    return res;

    
};

