//Find all pairs whose sum equals target
let arr=[2, 7, 11, 15, 3, 6]


function findMissing(){


    let map={}
    let target=9
    let pairs=[]

    for(let i=0;i<arr.length;i++){
      let remaing=target-arr[i]
      if(map.hasOwnProperty(remaing)){
        pairs.push([map[remaing],arr[i]])
      }else{
        map[arr[i]]=arr[i]
      }
    }
    return pairs
}

console.log(findMissing())



