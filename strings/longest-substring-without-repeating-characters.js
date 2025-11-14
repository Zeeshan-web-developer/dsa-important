/**
 * Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
 */


///brute force approach O(n^2)

/*
how it works:
 we use two nested loops to generate all possible substrings of the input string s. 
 The outer loop selects the starting index of the substring, 
 while the inner loop extends the substring by adding one character at a time. 
 We maintain a temporary string str to keep track of the current substring being formed.

 suppose the input string is "abcabcbb".
    1. The outer loop starts with i = 0, selecting the first character 'a'.
    2. The inner loop starts with j = 0, adding 'a' to str. 
    Since str is now "a", we update maxLength to 1.
    3. The inner loop continues with j = 1, adding 'b' to str.
    Since str is now "ab", we update maxLength to 2.
    4. The inner loop continues with j = 2, adding 'c' to str.
    Since str is now "abc", we update maxLength to 3.
    now the inner loop continues with j = 3, adding 'a' to str.
    5. However, 'a' is already present in str, so we break out of the inner loop.
    we reset str to an empty string
    and the outer loop continues with i = 1, selecting the second character 'b',
     and the process repeats.
*/
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str = ""
        for (let j = i; j < s.length; j++) {
            if (!str.includes(s[j])) {  //check if the character is already present in the str
                str += s[j]
                maxLength = Math.max(maxLength, str.length)
            } else {     //if character is already present we break the inner loop
                break;
            }
        }
    }

    return maxLength;
}


//optimal approach O(n)

let  s = "abcabcabc";
var lengthOfLongestSubstring = function (s) {
   let maxLength=0;
   let start=0;
   let end=0;
   let substr=new Set();
   
    while (end < s.length) { //iterate through the string
       //check if the character at end pointer is present in the set
     if(!substr.has(s[end])){ //if the character is not present in the set
       substr.add(s[end]) //add the character to the set
       maxLength=Math.max(maxLength,substr.size) //update the maxLength
       end++ //move the end pointer forward
     }
     else{
         substr.delete(s[start]) //if the character is already present in the set, remove the character at start pointer
         //why we are removing character at start pointer because we want to shrink the window from the start until we remove the duplicate character
       start++ //move the start pointer forward
     }
   }
   return maxLength;
}

console.log(lengthOfLongestSubstring(s))