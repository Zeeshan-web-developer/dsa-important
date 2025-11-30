



let arr = [1, [2, [[[3]]], [4], [5, [[[6]]], 7]]]


//flat upto specified depth

function customFlat(array, depth = 1) {
    if (depth < 0) {
        throw new Error("Depth must be a non-negative integer");
    }

    const result = [];

    (function flatten(arr, currentDepth) {
        for (let item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    })(array, 0);

    return result;
}
console.log(customFlat(arr, 3)); // [1, 2, 3, 4, 5, 6, 7]





