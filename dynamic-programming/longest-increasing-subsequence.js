//longest increasing subsequence
// Given an array of integers, find the length of the longest increasing subsequence.

function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) {
        return 0; // Base case: empty array has a longest increasing subsequence of length 0
    }
    
    const dp = new Array(arr.length).fill(1); // Initialize dp array with 1s
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1); // Update dp[i] if we find a longer subsequence
            }
        }
    }
    
    return Math.max(...dp); // The length of the longest increasing subsequence is the maximum value in dp
}

// Example usage:
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4 (subsequence [2, 3, 7, 101])
//how it works:
//create a dp array of same length as input array and fill it with 1s
//iterate through the input array starting from the second element
//for each element, iterate through all previous elements and check if the current element is greater than the previous element
//if it is, update the dp value at the current index to be the maximum of its current value and the dp value at the previous index plus 1
//finally, return the maximum value in the dp array, which represents the length of the longest increasing subsequence. 


//step by step: if condtion
//for i = 1, 
// arr[i] = 9, 
// compare with arr[0] = 10, 9 is not greater than 10, so dp[1] remains 1

//for i = 2, 
// arr[i] = 2, 
// compare with arr[0] = 10 and arr[1] = 9, 2 is not greater than either, so dp[2] remains 1

//for i = 3, 
// arr[i] = 5, 
// compare with arr[0] = 10, arr[1] = 9, and arr[2] = 2, 5 is greater than 2, so dp[3] becomes max(dp[3], dp[2] + 1) which is max(1, 1 + 1) = 2

//for i = 4, 
// arr[i] = 3, 
// compare with arr[0] = 10, arr[1] = 9, arr[2] = 2, and arr[3] = 5, 3 is greater than 2 but not greater than 5, so dp[4] becomes max(dp[4], dp[2] + 1) which is max(1, 1 + 1) = 2

//for i = 5, 
// arr[i] = 7, 
// compare with arr[0] = 10, arr[1] = 9, arr[2] = 2, arr[3] = 5, and arr[4] = 3, 7 is greater than 2, 5, and 3, so dp[5] becomes max(dp[5], dp[2] + 1), max(dp[5], dp[3] + 1), and max(dp[5], dp[4] + 1) which is max(1, 1 + 1), max(1, 2 + 1), and max(1, 2 + 1) = 3

//for i = 6,
//  arr[i] = 101, 
// compare with arr[0] = 10, arr[1] = 9, arr[2] = 2, arr[3] = 5, arr[4] = 3, and arr[5] = 7, 101 is greater than all previous elements, so dp[6] becomes max(dp[6], dp[2] + 1), max(dp[6], dp[3] + 1), max(dp[6], dp[4] + 1), and max(dp[6], dp[5] + 1) which is max(1, 1 + 1), max(1, 2 + 1), max(1, 2 + 1), and max(1, 3 + 1) = 4

//for i = 7, 
// arr[i] = 18, 
// compare with arr[0] = 10, arr[1] = 9, arr[2] = 2, arr[3] = 5, arr[4] = 3, arr[5] = 7, and arr[6] = 101, 18 is greater than 10, 9, 2, 5, 3, and 7 but not greater than 101, so dp[7] becomes max(dp[7], dp[0] + 1), max(dp[7], dp[1] + 1), max(dp[7], dp[2] + 1), max(dp[7], dp[3] + 1), max(dp[7], dp[4] + 1), and max(dp[7], dp[5] + 1) which is max(1, 1 + 1), max(1, 1 + 1), max(1, 1 + 1), max(1, 2 + 1), max(1, 2 + 1), and max(1, 3 + 1) = 4

