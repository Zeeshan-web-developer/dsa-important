
//jump game
//why greedy approach is used in this problem?
// The greedy approach is used in the Jump Game problem because it allows us to make optimal choices at each step to determine if we can reach the end of the array. 
// By iterating backwards from the last index and checking if we can jump to the current index, we can efficiently determine if we can reach the end without needing to explore all possible paths. 
// This approach runs in O(n) time complexity, where n is the length of the input array, making it an efficient solution for this problem.

function  canJump(nums) {
    let goal = nums.length - 1; // Start from the last index as the goal
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i; // Update the goal to the current index
        }
    }
    return goal === 0; // Check if we can reach the first index
}

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false