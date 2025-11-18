
//roate array to right by k steps

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
        start++;
        end--;
    }
}


var rotate = function (nums, k) {
    k = k % nums.length; // In case k is greater than array length
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
};



//roate array to left by k steps
var rotateLeft = function(nums, k) {
    k = k % nums.length; // In case k is greater than array length
     
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
     reverse(nums, 0, nums.length - 1); // Reverse the entire array
};