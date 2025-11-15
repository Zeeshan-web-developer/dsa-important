/**
 * 
 * 424. Longest Repeating Character Replacement
Medium
Topics
premium lock icon
Companies
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
 */

//brute force approach O(n^3)

var characterReplacement = function (s, k) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            let charCount = {};
            let maxCharFreq = 0;

            for (let char of substring) {
                charCount[char] = (charCount[char] || 0) + 1; //count frequency of each character just like hashmap example 
                /*
                chaacoutn={
                    A:2,
                    B:2
                }
                */
                maxCharFreq = Math.max(maxCharFreq, charCount[char]); //track the maximum frequency of any character in the substring
            }

            let charsToChange = substring.length - maxCharFreq;

            if (charsToChange <= k) {
                maxLength = Math.max(maxLength, substring.length);
            }
        }
    }

    return maxLength;
}

// Or 
function characterReplacement(s, k) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {

      // Count frequencies in s[i..j]
      let freq = {};
      for (let x = i; x <= j; x++) {
        freq[s[x]] = (freq[s[x]] || 0) + 1;
      }
     

      // find the most frequent character count
      let maxFreq = 0;
      for (let char in freq) {
        if (freq[char] > maxFreq) {
          maxFreq = freq[char];
        }
      }

      let length = j - i + 1;
      let replacementsNeeded = length - maxFreq;

      if (replacementsNeeded <= k) {
        maxLen = Math.max(maxLen, length);
      }
    }
    
  }

  return maxLen;
}


//optimal approach O(n)


var characterReplacement = function (s, k) {
    let maxLength = 0;
    let start = 0;
    let maxFreq = 0;
    let charCount = {};

    for (let end = 0; end < s.length; end++) {

        //update the frequency of the current character
        charCount[s[end]] = (charCount[s[end]] || 0) + 1;

        //update the max frequency of any character in the current window
        maxFreq = Math.max(maxFreq, charCount[s[end]]);

        let windowSize = end - start + 1;
        if (windowSize - maxFreq > k) { //if the number of characters to change exceeds k, shrink the window from the start
            charCount[s[start]]--; //decrease the frequency of the character going out of the window
            start++;
        }
        windowSize = end - start + 1;
        maxLength = Math.max(maxLength, windowSize);
    }

    return maxLength;
}