Array.prototype.customFlat = function (depth) {
    if (!this) throw new Error("invalid array")
    if(depth===null || depth==undefined) throw new Error("invalid depth value")
    let arr = this
    let result=[]
    function flat(arr,depth) {
        for (let i = 0; i < arr.length; i++){
            if (Array.isArray(arr[i])&&depth>0) {
               flat(arr[i],depth-1)
            } else {
                result.push(arr[i])
      }  
        }
    }
    flat(arr,depth);
    return result
}

let result = arr.customFlat(4)
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]