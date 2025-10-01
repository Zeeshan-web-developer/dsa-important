function twoSum(prices){
  
  let maxProfit=0;
  let buyPrice=prices[0];
  
  for(let i=1;i<prices.length;i++){    //start from 1 because we cannot buy and sell on same day
    let profit=prices[i]- buyPrice
    maxProfit=Math.max(profit,maxProfit); 
    buyPrice=Math.min(buyPrice,prices[i])
  }
  return maxProfit
}


//time complexity O(n)

//time compxity of Max and Min is O(1) because it takes constant time to compare two numbers

// space complexity O(1)

console.log(twoSum([7,1,5,3,6,4]))