//Longest common subsequence
//Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

//A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

//For example, "ace" is a subsequence of "abcde".
//A common subsequence of two strings is a subsequence that is common to both strings.

//brute force approach
function longestCommonSubsequence(text1,text2){
    function dfs(i, j) {
      
        // Base case: if we reach the end of either string, there are no more characters to compare, so we return 0.
    if(i==text1.length || j==text2.length){
      return 0
    }
    // If the characters at the current indices of both strings match, we can include this character in our common subsequence and move to the next indices in both strings. We add 1 to the result of the recursive call to account for the matched character.
    if(text1[i]==text2[j]){
      return 1+dfs(i+1,j+1)
    }
    else {
        // If the characters do not match, we have two options: 
        // we can either skip the current character in text1 and 
        // move to the next character in text1 (i+1, j), or we can 
        // skip the current character in text2 and move to the next 
        // character in text2 (i, j+1). We take the maximum of these 
        // two options to ensure we are finding the longest common subsequence.
      return Math.max(dfs(i+1,j),dfs(i,j+1))
    }
  }
  return dfs(0,0)
}

console.log(longestCommonSubsequence("abcde", "def"));//4

// Example usage:
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 (the longest common subsequence is "ace")
// The time complexity of this brute-force approach is O(2^(m+n)) where m and n are the lengths of the two input strings. This is because in the worst case, we explore all possible subsequences of both strings to find the longest common subsequence.


//dynamic programming approach
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // Create a 2D array to store the lengths of longest common subsequence at each point
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // If characters match, take the diagonal value and add 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // If characters do not match, take the maximum of the left and top values
            }
        }
    }
    
    return dp[m][n]; // The length of the longest common subsequence is found at the bottom-right corner of the dp array
}

// Example usage:
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3 (the longest common subsequence is "ace")
// The time complexity of this dynamic programming approach is O(m*n) where m and n are the lengths of the two input strings. This is because we fill a 2D array of size (m+1) x (n+1) to compute the lengths of longest common subsequences at each point. The space complexity is also O(m*n) due to the dp array storing results for each combination of indices.