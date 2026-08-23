//search in Rotated Sorted Array

//O(log n) using binary search
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted --only one half will be sorted due to rotation
        if (nums[left] <= nums[mid]) {  //why <= ? because if left and mid are the same, it means we have only one element in this half, and it's sorted by definition
            // Target is in the left half
            if (nums[left] <= target && target < nums[mid]) { //why <= for left and < for mid? because if target is equal to mid, we would have already returned mid at the beginning of the loop. So we only need to check if target is less than mid.
                right = mid - 1; //why mid - 1? because we have already checked mid, so we can safely exclude it from the search space.
            } else {
                left = mid + 1; //why mid + 1? because we have already checked mid, so we can safely exclude it from the search space.
            }
        } else { // Right half is sorted
            // Target is in the right half
            if (nums[mid] < target && target <= nums[right]) { //why < for mid and <= for right? because if target is equal to mid, we would have already returned mid at the beginning of the loop. So we only need to check if target is greater than mid. And we use <= for right because if target is equal to right, it means we have found the target at the right end of the search space, so we can include it in our search.
                left = mid + 1; //why mid + 1? because we have already checked mid, so we can safely exclude it from the search space.
            } else {
                right = mid - 1; //why mid - 1? because we have already checked mid, so we can safely exclude it from the search space.
            }
        }
    }

    return -1; // Target not found
}

//example
console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1