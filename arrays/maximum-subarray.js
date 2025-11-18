//Mazimum  subarray

//brute force

function maxSubArray(arr){
  let maxSum=arr[0];
  for(let i=0;i<arr.length;i++){
    let currentSum=0;
    for(let j=i;j<arr.length;j++){
      currentSum+=arr[j];
      maxSum = Math.max(maxSum, currentSum)
    }
  }
  return maxSum
}

//time complexity O(n^2)
//space complexity O(1)
//how it works
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//optimal using kadane's algorithm
function maxSubArray(arr){
  let maxSum=arr[0];
  let currentSum=0;
  
  for(let i=0;i<arr.length;i++){
    currentSum+=arr[i];
      maxSum = Math.max(maxSum, currentSum)
    if(currentSum<0){
      currentSum=0
    }
  }
  return maxSum
}