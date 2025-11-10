//Remove duplicates from an array
const arr=[21,4,7,9,2,9,5,4,17,9,4,4]



function smallest(){
  const newArray=[];
  
  
  for(let i=0;i<arr.length;i++){
    if(newArray.indexOf(arr[i])==-1){
      newArray.push(arr[i])
    }
  }
  console.log(newArray)
}
smallest()