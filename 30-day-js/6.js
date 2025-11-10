/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method
 */

function filterArray(arr, fn) {
    let filteredArr = []; // Initialize an empty array to store the filtered results

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // Check if the filtering function returns a truthy value
            filteredArr.push(arr[i]); // If true, push the element to the filtered array
        }
    }

    return filteredArr; // Return the filtered array
}