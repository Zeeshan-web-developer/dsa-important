//jump game ii

//the problem is to find the minimum number of jumps required to reach the end of the array, 
// where each element in the array represents the maximum jump length at that position.


//why greedy approach is used in this problem?
// The greedy approach is used in the Jump Game II problem because it allows us to make optimal choices at each step to minimize the number of jumps needed to reach the end of the array.
// By iterating through the array and keeping track of the farthest reachable index at each step, we can determine when we need to make a jump and how far that jump should take us. 
// This approach runs in O(n) time complexity, where n is the length of the input array, making it an efficient solution for this problem.



function jump(nums) {

    let totalJumps = 0;
    let coverage = 0;
    let lastJumpIndex = 0;
    let destination = nums.length - 1;

    // If already at last index
    if (nums.length === 1) return 0;

    for (let i = 0; i < nums.length; i++) {

        // Farthest place reachable
        coverage = Math.max(coverage, i + nums[i]);

        // End of current jump range
        if (i === lastJumpIndex) {

            // Move jump boundary
            lastJumpIndex = coverage;

            // Increase jump count
            totalJumps++;

            // If destination reachable
            if (coverage >= destination) {
                return totalJumps;
            }
        }
    }
}