let heighets=[1,8,6,2,5,4,8,3,7];

//1-8 1-7 3-7



//brute force  
// time complexity O(n^2)
function maxWater(){
  
  let maxPani=0;
  let min=heighets[0]
  
  
  for(let i=0;i<heighets.length-1;i++){
    for(let j=i+1;j<heighets.length;j++){
      
      
       min=Math.min(heighets[i],heighets[j]);
       let value=min*(j-i)
      
      maxPani=Math.max(value,maxPani)
      
        console.log({i:heighets[i],j:heighets[j],length:j,maxPani})
    }
    console.log({maxPani})
  }
  console.log(maxPani)
}
maxWater()


//optimal approach
function maxWaterOptimal(){
  let left=0;
  let right=heighets.length-1;
  let maxPani=0;
  
  while(left<right){
    let min=Math.min(heighets[left],heighets[right]);
    let value=min*(right-left);
    maxPani=Math.max(value,maxPani);
    
    if(heighets[left]<heighets[right]){
      left++;
    }else{
      right--;
    }
  }
  console.log(maxPani)
}