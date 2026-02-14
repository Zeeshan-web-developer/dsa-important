// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.



function isValidPalindrome(str) {
    let left = 0;
    let right= str.length - 1;
    while(left<right){
      while(left<right && !isAlphaNumeric(str[left])) left++;
      while(left<right && !isAlphaNumeric(str[right])) right--;
      if(str[left].toLowerCase()!==str[right].toLowerCase()){
        return false
      }
      left++
      right--

    }
 return true
}

function isAlphaNumeric(ch){
  return  /[a-z0-9]/i.test(ch); // Regular expression to check if the character is alphanumeric (case-insensitive)
  
}
console.log(isValidPalindrome("A man, a plan, a canal: Panamk"))