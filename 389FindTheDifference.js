/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let char = new Array(26).fill(0);
    //fill array with s string count;
    for(let i = 0; i < s.length; i++){
      let charCode = s.charCodeAt(i) - 97;
      char[charCode]++;
    }
    //remove the char count for string t
    for(let i = 0; i < t.length; i++){
      let charCode = t.charCodeAt(i) - 97;
      char[charCode]--;
    }
    //Idealy in by now all char array should be zero but there will be one element will be -1 because it was extra in string t
    for(let i = 0; i < char.length; i++){
      if(char[i] === -1){
        return String.fromCharCode(i + 97);
      }
    }
};