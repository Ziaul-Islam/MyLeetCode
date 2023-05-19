/*
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;
    let sp = s.split('');
    while(start < end){
        if(ifVowel(sp[start]) && ifVowel(sp[end])){
            let temp = sp[start];
            sp[start] = sp[end];
            sp[end] = temp;
            start++;
            end--;
        }
        else{
            if(!ifVowel(sp[start])) start++;
            if(! ifVowel(sp[end]))end--;   
        }
    }
    return sp.join('');
};
var ifVowel = function(ch){
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.some((elem) => elem == ch.toLowerCase());
}