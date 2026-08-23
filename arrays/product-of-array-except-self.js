// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//Brute force approach O(n^2)
function characterReplacement(nums) {
 
let newarray=[]
 
 for(let i=0;i<nums.length;i++){
   let sum=1;
  for(let j=0;j<nums.length;j++){
    if(i!==j){
      sum*=nums[j]
    }
  }
  newarray[i]=sum
 }
 return newarray
}




//optimal approach O(n)
//example [1,2,3,4]
function productExceptSelf(arr){
  let prefixArray=[];
  let suffixArray=[];
  let finalArray=[];
  
  
  let arr=[1,2,3,4];
   let prefixArray=[];
   let suffixArray=[];
   let finalArray=[];

     prefixArray[0]=1
   for(let i=1;i<arr.length;i++){
    prefixArray[i]=prefixArray[i-1]*arr[i-1]
   }

   suffixArray[arr.length-1]=1
    for(let i=arr.length-2;i>=0;i--){
     suffixArray[i]=suffixArray[i+1]*arr[i+1]
    }

for(let i=0;i<arr.length;i++){
    finalArray[i]=prefixArray[i]*suffixArray[i];
}
 return finalArray;
}

console.log(twoSum([1,2,3,4]))