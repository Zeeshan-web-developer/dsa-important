//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.


const containsDuplicate = function (nums) { 

    const map = new Map();


    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        else {
            map.set(nums[i], 1);
        }
    }
    

}