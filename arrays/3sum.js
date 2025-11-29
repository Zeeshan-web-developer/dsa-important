//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//Notice that the solution set must not contain duplicate triplets.



//brute force approach O(n^3)


var threeSum = function (nums) {
    let result = [];
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    let triplet = [nums[i], nums[j], nums[k]].sort((a,b)=>a-b);
          // check if this combination already exists
          if(!result.some(t => t.toString() === triplet.toString())){
            result.push(triplet);
          }
                }
            }
        }
    }
    return result;
}



var threeSum = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for the first number

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for the second number
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate values for the third number
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}