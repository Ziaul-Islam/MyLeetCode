/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pat_map = {};
    let ar = s.split(" ");
    let smap = {};
    if (pattern.length !== ar.length) return false;
    for(let i in pattern){
        console.log(pat_map[pattern.charAt(i)]);
        console.log(smap[ar[i]]);
        if((pat_map[pattern.charAt(i)] == undefined) && (smap.hasOwnProperty(ar[i]) == false)){
            pat_map[pattern.charAt(i)] = i;
            smap[ar[i]] = i;
        }
        else if(pat_map[pattern.charAt(i)] !== smap[ar[i]] ){
                return false;
        }
    }
    
    return true;

};