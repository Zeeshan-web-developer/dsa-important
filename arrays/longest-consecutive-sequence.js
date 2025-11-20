//brute force


function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);
    let max = 1;
    let current = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
        if (nums[i] === nums[i - 1] + 1) {
            current++;
        } else {
            max = Math.max(max, current);
            current = 1;
        }
        }
    }
    
    return Math.max(max, current);
}
//time complexity O(n log n) due to sorting



/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let set = new Set(nums);
  let max = 0;

  for (let num of set) {
    // Only start from the beginning of a sequence
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      max = Math.max(max, length);
    }
  }

  return max;
}

