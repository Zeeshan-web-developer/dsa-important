

//brute force approach --using recursion


function combinationSum4(nums, target) {
    if (target === 0) {
        return 1; // Base case: one way to make target 0 (using no numbers)
    }
    if (target < 0) {
        return 0; // Base case: no way to make negative target
    }
    
    let count = 0;
    
    for (let num of nums) {
        count += combinationSum4(nums, target - num); // Recursive call with reduced target
    }
    
    return count;
}

// Example usage: nums = [1, 2], target = 3

//dp approach
function combinationSum4(nums, target) {
    const dp = new Array(target + 1).fill(0); //why target + 1? because we want to include the target itself as an index in the dp array. The dp array is used to store the number of ways to make up each amount from 0 to target. By initializing it with target + 1, we ensure that we have a slot for every amount up to and including the target. This allows us to easily access and update the number of combinations for each amount as we iterate through the nums array and build our solution.
    dp[0] = 1; // Base case: one way to make target 0 (using no numbers)

    for (let i = 1; i <= target; i++) {
        for (let num of nums) { //it is used ->no of ways to make i eg 3 number of 1 and 2 we can make 3 by using 1+1+1 or 1+2 or 2+1 so we have 3 ways to make 3 using 1 and 2
            if (i - num >= 0) { // Check if the number can be used for the current target
                dp[i] += dp[i - num]; // Add the number of ways to make the reduced target
            }
        }
    }

    return dp[target];
}