//single number
//leetcode 136
//description
/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; // XOR operation
    }
    return result;
};

// Example usage:
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 4
function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; // XOR operation
    }
    return result;
}

// Example usage:
const nums1 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums1)); // Output: 4

const nums2 = [2, 2, 1];
console.log(singleNumber(nums2)); // Output: 1

const nums3 = [1];
console.log(singleNumber(nums3)); // Output: 1
