var maxProduct = function(nums) {
 let prefixsum=1;
 let suffixSum=1;
 let solution=nums[0]
  
  for(let i=0;i<nums.length;i++){
    prefixsum=prefixsum==0?1:prefixsum
   suffixSum=suffixSum==0?1:suffixSum


   prefixsum=nums[i]*prefixsum;
   suffixSum=nums[nums.length-i-1]*suffixSum

  

   solution=Math.max(solution,Math.max(prefixsum,suffixSum))
     
  }
  
  return solution
};