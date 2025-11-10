
const numbrs = [1, 2, 3, 4, 5, 6];




Array.prototype.myFilter = function (cb) {
    
    if(this == null|| this == undefined|| this.length<0){
        throw new Error("null or undefined filter")
    }

    const arr = this
    
    if(typeof cb !== 'function'){
        throw new Error("callback is not a function")
    }

    let result = [];

    for (let i = 0; i < arr.length; i++){
       if(cb(arr[i], i, arr)){
        result.push(arr[i])
       }
    }
    return result;
}

 console.log(numbrs.myFilter((num)=>num%2===0))
