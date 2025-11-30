const arr=[1,2,3,4];



Array.prototype.myMap=function(cb){
  if(!this||this.length<0)
  {
    throw new Error("null or undefined map")
  }
  let result=[];
  const arr=this
  for(let i=0;i<arr.length;i++){
    result.push(cb(arr[i],i,arr))
  }
  return result
}

arr.myMap((item,i,arr)=>{
    console.log(`item:${item}, index:${i}, array:${arr}`)
})