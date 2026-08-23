//find duplicate in array  without using extra space and in O(n) time complexity
// without modifying the original array
// we can use the fact that the numbers are between 1 and n, where n is the length of the array, to mark the presence of a number by negating the value at the index corresponding to that number. If we encounter a number that has already been marked as negative, it means we have found a duplicate.

//slow and fast pointer approach



let arr = [1, 3, 4, 2, 2];
/*         0 1  2  3  4
the intution is think the lemnts of array are address of next elemnts
and the index is the value of the element at that index
*/
//to get element we use arr[index]
//now to get the next index we can use arr[arr[index]]
function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // First phase: Finding the intersection point in the cycle
    do {
        slow = nums[slow]; // Move slow by 1 step
        fast = nums[nums[fast]]; // Move fast by 2 steps
    } while (slow !== fast);

    // Second phase: Finding the entrance to the cycle
    slow = nums[0]; // Start from the beginning
    while (slow !== fast) {
        slow = nums[slow]; // Move slow by 1 step
        fast = nums[fast]; // Move fast by 1 step
    }

    return slow; // The duplicate number
}

//time complexity O(n) and space complexity O(1)