//greedy maximum-subarray
//it is a greedy algorithm because at each step, 
// we are making a local optimal choice by adding the current element 
// to the current sum and updating the maximum sum if necessary. 
// If the current sum becomes negative, we reset it to zero, 
// which is also a greedy choice to start fresh for the next potential subarray. 
// The algorithm runs in O(n) time complexity, where n is the length of the input array.
function maxSubArray(nums) {
  let maxSum = nums[0];
    let currentSum = nums[0];
    
    if (nums.length === 1) {
        return maxSum; // If there's only one element, return it as the maximum sum
    }

  for (let i = 1; i < nums.length; i++) {
      currentSum = currentSum + nums[i];
      maxSum = Math.max(maxSum, currentSum);
      if (currentSum < 0) {
          currentSum = 0; // Reset current sum if it becomes negative
      } 

  }

  return maxSum;
}

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6 (subarray [4,-1,2,1])