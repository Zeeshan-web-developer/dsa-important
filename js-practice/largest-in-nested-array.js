//find largest in nested array

let arr = [1, 2, [3, 4], [5, 6, [7, 8]], 9];

function findLargest(arr) {
    let largest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        const nestedLargest = findLargest(arr[i]);
        if (nestedLargest > largest) {
            largest = nestedLargest;
        }
        } else {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        }
    }
    
    return largest;
}
    

//using flat method
function findLargest(arr) {
    const flatArray = arr.flat(Infinity);
    return Math.max(...flatArray);
}