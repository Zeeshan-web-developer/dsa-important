//find the second largest number in an array
function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([5, 5, 5])); // Output: null


//third largest number in an array
function thirdLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } else if (arr[i] > thirdLargest && arr[i] !== largest && arr[i] !== secondLargest) {
            thirdLargest = arr[i];
        }
    }

    return thirdLargest === -Infinity ? null : thirdLargest;
}