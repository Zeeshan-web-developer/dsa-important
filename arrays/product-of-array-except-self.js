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
function twoSum(arr){
  let prefixArray=[];
  let suffixArray=[];
  let finalArray=[];
  
  
  for(let i=0;i<arr.length;i++){
    if(prefixArray.length<=0){
      prefixArray.push(1)
    }
    else{
      prefixArray.push(prefixArray[i - 1] * arr[i - 1])
      //prefixArray[0]=1
      //prefixArray[1]=prefixArray[0]*arr[0]=1*1=1
      //prefixArray[2]=prefixArray[1]*arr[1]=1*2=2
      //prefixArray[3]=prefixArray[2]*arr[2]=2*3=6
    

    }
  }
  //prefixArray=[1,1,2,6]
    for(let j=arr.length-1;j>=0;j--){
      if(suffixArray.length<=0){
        suffixArray.push(1)
      }
      else{
        suffixArray.unshift(suffixArray[0] * arr[j + 1])
        //suffixArray[2]=suffixArray[3]*arr[3]=1*4=4
        //suffixArray[1]=suffixArray[2]*arr[2]=4*3=12
        //suffixArray[0]=suffixArray[1]*arr[1]=12*2=24
      }
    }
  
    //suffixArray=[24,12,4,1]
    
    for(let k=0;k<arr.length;k++){
      finalArray.push(prefixArray[k]*suffixArray[k])
    }
    return finalArray
}

console.log(twoSum([1,2,3,4]))