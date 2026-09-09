//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//leetcode problem no 268

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of elements in the array
    return expectedSum - actualSum; // The missing number
}

// Example usage:
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2

const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

const nums3 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums3)); // Output: 8

const nums4 = [0];
console.log(missingNumber(nums4)); // Output: 1