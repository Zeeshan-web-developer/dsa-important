//house robber ii

//brute force approach
function rob(nums) {
    if (nums.length === 0) return 0; // Base case: no houses to rob
    if (nums.length === 1) return nums[0]; // Base case: only one house to rob

    function robHelper(start, end) {
        if (start > end) {
            return 0; // Base case: no more houses to rob
        }

        // Option 1: Rob the current house and skip the next one
        const robCurrent = nums[start] + robHelper(start + 2, end);

        // Option 2: Skip the current house and move to the next one
        const skipCurrent = robHelper(start + 1, end);

        // Return the maximum of both options
        return Math.max(robCurrent, skipCurrent);
    }

    // Since the houses are in a circle, we have two scenarios:
    // 1. Rob from the first house to the second-to-last house (exclude the last house)
    // 2. Rob from the second house to the last house (exclude the first house)
    return Math.max(robHelper(0, nums.length - 2), robHelper(1, nums.length - 1));
}

// Example usage:
console.log(rob([2, 3, 2])); // Output: 3 (rob house 2)
console.log(rob([1, 2, 3, 1])); // Output: 4 (rob house 1 and house 3)
// The time complexity of this brute-force approach is O(2^n) due to the exponential growth of the recursive calls. 

//dynamic programming approach
function rob(nums) {
    if (nums.length === 0) return 0; // Base case: no houses to rob
    if (nums.length === 1) return nums[0]; // Base case: only one house to rob

    function robHelper(start, end) {
        const dp = new Array(end - start + 1).fill(0); // Create a dp array to store the maximum amount that can be robbed up to each house in the current range
        dp[0] = nums[start]; // Base case: maximum amount that can be robbed from the first house in the range is the value of that house
        dp[1] = Math.max(nums[start], nums[start + 1]); // Base case: maximum amount that can be robbed from the first two houses in the range is the maximum of the two house values

        for (let i = 2; i < dp.length; i++) {
            // choice 1 -> skip current house
            let skip = dp[i - 1];

            // choice 2 -> rob current house
            let take = nums[start + i] + dp[i - 2];

            dp[i] = Math.max(skip, take); // For each house in the range, the maximum amount that can be robbed is the maximum of either skipping the current house (dp[i - 1]) or robbing the current house and adding it to the maximum amount from two houses back (nums[start + i] + dp[i - 2])
        }

        return dp[dp.length - 1]; // Return the maximum amount that can be robbed in the current range
    }

    // Since the houses are in a circle, we have two scenarios:
    // 1. Rob from the first house to the second-to-last house (exclude the last house)
    // 2. Rob from the second house to the last house (exclude the first house)
    return Math.max(robHelper(0, nums.length - 2), robHelper(1, nums.length - 1));
}

// Example usage:
console.log(rob([2, 3, 2])); // Output: 3 (rob house 2)
console.log(rob([1, 2, 3, 1])); // Output: 4 (rob house 1 and house 3)
// The time complexity of this dynamic programming approach is O(n) due to the single loop that iterates through the range of houses. The space complexity is also O(n) due to the dp array storing results for each house in the range.