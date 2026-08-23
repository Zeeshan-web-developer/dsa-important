//remove duplicates from an array and return unique elements

function unique(arr) {
    let unArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (unArr.indexOf(arr[i]) === -1) {
            unArr.push(arr[i]);
        }
    }

    return unArr;
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));