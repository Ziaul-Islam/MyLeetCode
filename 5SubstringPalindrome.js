/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0, end = 0;
    let len = 0;
    for(let i = 0; i < s.length; i++){
        //odd will have one mid
        let odd = expand(s, i, i);
        //even will have two mid
        let even =  expand(s, i, i+1);
        console.log(i)
        len = Math.max(odd, even);

        if(len > (end - start + 1)){
            start = i - Math.floor((len - 1)/2);
            end = i + Math.floor(len/2);
        }
    }
    return s.substring(start, end + 1);
};

const expand = function(s, start, end){
    while((start >= 0) && (end < s.length) && (s.charAt(start) === s.charAt(end))){
        start--;
        end++;
    }
    return (end - start - 1);
}