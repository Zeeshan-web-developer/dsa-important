//selection sort

// Selection Sort is a simple sorting algorithm that divides the input list into two parts:
// the sorted part at the left end and the unsorted part at the right end. 
// Initially, the sorted part is empty and the unsorted part is the entire list. 
// The algorithm repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the end of the sorted part.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Output: [11, 12, 22, 25, 64]