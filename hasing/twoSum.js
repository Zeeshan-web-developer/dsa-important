const nums = [2,7,11,15]
const target=9;




function twoSum(){
  let map=new Map();
  for(let i=0;i<nums.length;i++){
    let value=target-nums[i];
    if(map.has(value)){
      return [map.get(value),i]
    }
    else{
      map.set(nums[i],i)
    }
  }
  // console.log(map)
  
}

console.log(twoSum())