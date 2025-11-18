/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]
 */


//time complexity O(n log n) due to sorting
var topKFrequent = function (nums, k) {
    const frequencyMap = {}
    
    // Count the frequency of each element
    for (const num of nums) {
        
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

//    Object.entries(arr) turns your object into an array of small arrays:

// [
//   ['a', 6],
//   ['b', 2],
//   ['c', 3],
//   ['d', 5]
// ]
    const sortMap = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(sortMap[i][0]));
    }
    return result;
}


//optimal using bucket sort O(n)



function topKFrequent(nums, k) {
    let map = {};


    //crete frequency map
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1; //map[num]||0 means if map[num] is undefined then assign 0+1
    }

    //create bucket array
    /**
     *Visual Example
For nums = [1,1,1,2,2,3] (n=6):

Bucket array size = 7 (indices 0-6):

text
Index 0: []  (unused - no element has frequency 0)
Index 1: [3] (frequency 1)
Index 2: [2] (frequency 2)
Index 3: [1] (frequency 3)
Index 4: []  (unused)
Index 5: []  (unused)  
Index 6: []  (unused)

     */
    let bucket = new Array(nums.length + 1); //+1 because frequency can be at max n
    for (let i = 0; i <= nums.length; i++) {
        bucket[i] = [];
    }

    //fill the bucket array baesed on frequency map suppose if frequency of 1 is 3 then put 1 in bucket[3]
    //bucket index represents frequency

    for (let [key, value] of map) {
        bucket[value].push(parseInt(key));
    }

    //collect k most frequent elements from bucket array

    let result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }
    return result.slice(0, k); //in case we have more than k elements in result
}