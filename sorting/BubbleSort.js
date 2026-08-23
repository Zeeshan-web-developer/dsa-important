//bubble sort

// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
// compares adjacent elements and swaps them if they are in the wrong order. 
// The process is repeated until the list is sorted.

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) { //n - i - 1 because the last i elements are already in place
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps happened, array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}


//time complexity: O(n^2) in the worst and average case, O(n) in the best case (when the array is already sorted)
const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]