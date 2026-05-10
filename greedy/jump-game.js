
//jump game


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