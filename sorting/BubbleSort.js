//bubble sort

// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
// compares adjacent elements and swaps them if they are in the wrong order. 
// The process is repeated until the list is sorted.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]