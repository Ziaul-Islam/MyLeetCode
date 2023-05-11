/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let scount = new Map();
    let tcount = new Map();
    for(i in s){
        if(! scount.hasOwnProperty(s[i]))
            scount[s[i]] = 1;
        else
            scount[s[i]]++;
        if(! tcount.hasOwnProperty(t[i]))
            tcount[t[i]] = 1;
        else
            tcount[t[i]]++;
    }
    //console.log(scount);
    //console.log(tcount);
    for(let prop in scount){
        if(scount[prop] !== tcount[prop]) return false;
    }
    return true;
};