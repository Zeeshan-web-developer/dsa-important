function rob(nums) {


    function robHelper(start) {
        if (start >= nums.length) {
            return 0; // Base case: no more houses to rob
        }

        // Option 1: Rob the current house and skip the next one
        const robCurrent = nums[start] + robHelper(start + 2);

        // Option 2: Skip the current house and move to the next one
        const skipCurrent = robHelper(start + 1);

        // Return the maximum of both options
        return Math.max(robCurrent, skipCurrent);
    }

    return robHelper(0); // Start from the first house
}

// Example usage:
console.log(rob([1, 2, 3, 1])); // Output: 4 (rob house 1 and house 3)
console.log(rob([2, 7, 9, 3, 1])); // Output: 12 (rob house 1, house 3, and house 5)
// The time complexity of this brute-force approach is O(2^n) due to the exponential growth of the recursive calls.


//dynamic programming approach
function rob(nums) {
    if (nums.length === 0) return 0; // Base case: no houses to rob
    if (nums.length === 1) return nums[0]; // Base case: only one house to rob
    if (nums.length === 2) return Math.max(nums[0], nums[1]); // Base case: two houses, rob the one with more money

    const dp = new Array(nums.length).fill(0); // Create a dp array to store the maximum amount that can be robbed up to each house
    dp[0] = nums[0]; // Base case: maximum amount that can be robbed from the first house is the value of the first house
    dp[1] = Math.max(nums[0], nums[1]); // Base case: maximum amount that can be robbed from the first two houses is the maximum of the two house values

    for (let i = 2; i < nums.length; i++) {
        // choice 1 -> skip current house
        let skip = dp[i - 1];

        // choice 2 -> rob current house
        let take = nums[i] + dp[i - 2];

        dp[i] = Math.max(skip, take); // For each house, the maximum amount that can be robbed is the maximum of either skipping the current house (dp[i - 1]) or robbing the current house and adding it to the maximum amount from two houses back (nums[i] + dp[i - 2])
    }

    return dp[nums.length - 1];
}

// Example usage:
console.log(rob([1, 2, 3, 1])); // Output: 4 (rob house 1 and house 3)
console.log(rob([2, 7, 9, 3, 1])); // Output: 12 (rob house 1, house 3, and house 5)
//