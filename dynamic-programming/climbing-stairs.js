//You are climbing a staircase. It takes n steps to reach the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//brute force approach
function climbStairs(n) {
    if (n <= 0) {
        return 0; // No ways to climb if there are no steps
    }
    if (n === 1) {
        return 1; // Only one way to climb one step
    }
    if (n === 2) {
        return 2; // Two ways to climb two steps: (1+1) or (2)
    }
    return climbStairs(n - 1) + climbStairs(n - 2); // Recursive case
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
// The time complexity of this brute-force approach is O(2^n) due to the exponential growth of the recursive calls.


//dynamic programming approach
function climbStairs(n) {

    if (n <= 2) return n;

    let dp = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
// The time complexity of this dynamic programming approach is O(n) due to the single loop that iterates up to n. The space complexity is also O(n) due to the dp array storing results for each step.

//optimized dynamic programming approach
function climbStairs(n) {
    if (n <= 2) return n;

    let first = 1; // Ways to climb 1 step
    let second = 2; // Ways to climb 2 steps

    for (let i = 3; i <= n; i++) {
        const current = first + second; // Current ways is the sum of the previous two
        first = second; // Update first to the previous second
        second = current; // Update second to the current
    }

    return second; // The nth step will be stored in second
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
// The time complexity of this optimized dynamic programming approach is O(n) due to the single loop that iterates up to n. The space complexity is O(1) since

