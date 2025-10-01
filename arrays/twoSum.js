// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]



// function twoSum(arr,target){
  

//brute force
//   for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]+arr[j]==target) return [i,j];
//     }
//   }
  
// }



//optimal using hashmap
function twoSum(arr,target){
  
  let map={};
  for(let i=0;i<arr.length;i++){
    let value=arr[i];
    let cp=target-value;
    
    if(map[cp]!==undefined){
      return [map[cp],i]
    }
    else{
      map[value]=i
    }
  }
}
console.log(twoSum([3,2,4],6))