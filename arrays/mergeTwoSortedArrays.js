
//merge two sorted arrays into one sorted array
function mergeTwoSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays and insert the smaller element into the merged array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}