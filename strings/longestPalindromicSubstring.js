/**
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
let longest=0;
let old="";

function expand(left,right){
    while(left>=0 && right<s.length && s[left]===s[right]){
         let substringLength=right-left+1
         longest=Math.max(longest,substringLength)
        if(old.length<longest){
         old=s.substring(left,right+1)
    }
        left--;
        right++
    }

}


    for(let i=0;i<s.length;i++){
        expand(i,i)
        expand(i,i+1)
    }
    return old;
    
};