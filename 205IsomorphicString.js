/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    let str = '';
    for(let i = 0; i < s.length; i++){
        //console.log(map);
        if(map[s.charAt(i)] == undefined){
                map[s.charAt(i)] = t.charAt(i);
        }
        /*else if(map[s.charAt(i)] !== t.charAt(i) && map[t.charAt(i)] !== s.charAt(i) ){
            return false;
        }*/
        str += map[s.charAt(i)];
    } 
    console.log(str);
    return str == t;
};