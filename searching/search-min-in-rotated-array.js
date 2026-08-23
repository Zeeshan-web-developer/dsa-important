//search min in Rotated Sorted Array ascending order

//O(log n) using binary search
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) { //why < and not <= ? because we are looking for the minimum element, so we want to stop when left and right point to the same element, which will be the minimum.
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) { //why > and not >= ? because if mid is greater than right, it means the minimum element must be in the right half of the array, so we can safely exclude the left half from our search space. If mid is equal to right, it means we have found the minimum element at mid, so we can return it immediately.
            left = mid + 1; //why mid + 1? because we have already checked mid, so we can safely exclude it from the search space.
        } else {
            right = mid; //why mid and not mid - 1? because if mid is less than or equal to right, it means the minimum element could be at mid or in the left half of the array, so we cannot exclude mid from our search space. We need to include it in our search.
        }
    }

    return nums[left]; //or nums[right], both will point to the minimum element at this point.
}