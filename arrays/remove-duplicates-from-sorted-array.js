//remove-duplicates-from-sorted-array --array 

//leetcode problem No. 26

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let left = 0;
    let right = 1;
    
    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
        right++;
    }

    return left + 1;
}

//example
const nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // Output: 2

//example 2
const nums2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2)); // Output: 5