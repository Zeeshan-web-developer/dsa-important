//remove-element-from-array

function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

//example
const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val)); // Output: 2

//example 2
const nums2 = [0,1,2,2,3,0,4,2];
const val2 = 2;
console.log(removeElement(nums2, val2)); // Output: 5