




const obj={
  name:"zeeshan",
  age:25,
  address:{
    state:"j&k",
    fullAddress:{
      street:"phatan",
      homeAddress:{
        homNo:"21"
      }
    }
  },
   education:{
    college:"lovely",
    degree:{
      stream:"Mca",
      rollno:{
        class:"21"
      }
    }
  },
}




function flattenObj(){
  let result={}
  
  function flat(obj,parentKey){
    for(let [key,value] of Object.entries(obj)){
      
      const newKey=parentKey?parentKey+"."+key:key
      if(typeof value ==="object" &&value!==null &&!Array.isArray(value)){
        flat(value,newKey)
      }
      else{
        result[newKey]=value
      }
    }
    
  }
  
    flat(obj, null)
    return result
  
}

console.log(flattenObj(obj))