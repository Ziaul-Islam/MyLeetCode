/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = {};
    for(let ch of magazine){
        if(map.hasOwnProperty(ch)){
            map[ch] += 1;
        }
        else map[ch] = 1;
    }
    for(let ch of ransomNote){
        if(!map.hasOwnProperty(ch))
            return false;
        else{
            if(map[ch] > 0) map[ch] -= 1;
            else return false;
        }
    }
    return true;
};