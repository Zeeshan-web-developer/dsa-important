Array.prototype.myFoEach = function (cb) { 


    if(this == null || this == undefined || this.length < 0){
        throw new Error("null or undefined forEach")
    }
    if(typeof cb !== 'function'){
        throw new Error("callback is not a function")
    }

    const arr = this
    
    for (let i = 0; i < arr.length; i++){
       cb(arr[i], i, arr)
    }

}

const numbers = [10, 20, 30, 40];
numbers.myFoEach((num, index, array) => {
    console.log(`Number: ${num}, Index: ${index}, Array: ${array}`);
});