// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


function twoSum(arr){
  let prefixArray=[];
  let suffixArray=[];
  let finalArray=[];
  
  
  for(let i=0;i<arr.length;i++){
    if(prefixArray.length<=0){
      prefixArray.push(1)
    }
    else{
      prefixArray.push(prefixArray[i-1]*arr[i-1])
    }
  }
    for(let j=arr.length-1;j>=0;j--){
      if(suffixArray.length<=0){
        suffixArray.push(1)
      }
      else{
        suffixArray.unshift(suffixArray[0]*arr[j+1])
      }
    }
    console.log(prefixArray,suffixArray)
    for(let k=0;k<arr.length;k++){
      finalArray.push(prefixArray[k]*suffixArray[k])
    }
    return finalArray
}

console.log(twoSum([1,2,3,4]))