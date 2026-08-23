/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Two words or strings are anagrams if they contain the same characters 
 * with the same frequency, but the characters can be in a different order.
 */
var isAnagram = function(s, t) {
    if(!s||!t||s.length!==t.length) return false
    const map=new Map();

    for(let ch of s){
        if(map.get(ch)){
            map.set(ch,map.get(ch)+1)
        }
        else{
            map.set(ch,1) 
        }
    }
    for(let ch of t){
        if(!map.has(ch)||map.get(ch)===0) return false //if the iterating charter is not found in first map then its not anagram
        map.set(ch,map.get(ch)-1) //Now we go through "nagaram" letter by letter and subtract one each time we find the letter in map.
    }
    return true
};