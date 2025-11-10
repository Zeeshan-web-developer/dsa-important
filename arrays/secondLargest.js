//Find the second largest number in an array

const arr = [3, 5, 1, 4, 2];

function secondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for second largest
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {     // Update first and second largest
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    return (second === -Infinity) ? null : second; // Return null if no second largest found
}