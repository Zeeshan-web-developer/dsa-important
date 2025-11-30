




Array.prototype.customReduce = function(callback, initialValue) {
    if (this == null || this == undefined || this.length < 0) {
        throw new Error("null or undefined reduce");
    }
    if (typeof callback !== 'function') {
        throw new Error("callback is not a function");
    }

    const arr = this;
    let accumulator = initialValue !== undefined ? initialValue : arr[0];


    //its beacuse we have already used first element as initial value in above line
    let startIndex = initialValue !== undefined ? 0 : 1; 

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}


