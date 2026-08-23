//find duplicates from an array and return the duplicates with their frequency

function findDuplicates(arr) {
    const frequency = {};
    const duplicates = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (frequency[num]) {
            frequency[num]++;
            duplicates[num] = frequency[num]; // Store the duplicate with its frequency
        } else {
            frequency[num] = 1;
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));