Array.prototype.myForEach=function(cb){
    if(typeof cb!=="function" || !cb)
   { throw new Error("invliad function")}

   if(!this){
    throw new Error("invlaid Array")

   }
   let arr=this
   for(let i=0;i<arr.length;i++){
    cb(i,arr[i],arr)
   }
}


let arr=[1,2,3]

console.log(myForEach.arr((i,j,k)=>{
    console.log(i,j,k)
}))