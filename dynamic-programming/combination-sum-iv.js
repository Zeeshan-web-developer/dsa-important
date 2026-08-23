

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

// Example usage: nums = [2,3], target = 11

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

//this formulla simlies like
//if i have make 5 using 2,3
  //dp[5] = dp[5-2] + dp[5-3] = dp[3] + dp[2] = 3 + 2 = 5
//so to make 5 we have 5 ways using 2 and 3
//basicilly we are reducing the target by each number in the nums array and adding the number of ways to make the reduced target to get the total number of ways to make the original target.

// Example usage: nums = [2,3], target = 11 
//formula first lets calucaet to make 0 is 1 because we can use no numbers to make 0
//to make 1 we can use 1 so dp[1] = dp[0] = 1
//to make 2 we can use 1+1 or 2 so dp[2] = dp[1] + dp[0] = 1 + 1 = 2
//to make 3 we can use 1+1+1 or 1+2 or 2+1 so dp[3] = dp[2] + dp[1] = 2 + 1 = 3

//time complexity O(n*m) where n is the target and m is the length of nums array.