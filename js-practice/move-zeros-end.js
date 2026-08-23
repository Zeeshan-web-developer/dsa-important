//move all zeros to the end of the array
function moveZeros(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) { // here if all are non-zero then i and j always poitn to same eleemnt
    // Move non-zero elements to the front of the array
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            j++;
        }
    }

    while (j < arr.length) { // Fill the remaining elements with zeros
        arr[j] = 0;
        j++;
    }

    return arr;
}
[1,5,2,4,6,8]

console.log(moveZeros([1,5,2,4,6,8])); // Output: [1, 5, 2, 4, 6, 8]

//1st iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 0 i= 0
//2nd iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 1 i= 1
//3rd iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 2 i= 2
//4th iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 3 i= 3
//5th iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 4 i= 4
//6th iteration of the above code array = [1, 5, 2, 4, 6, 8], j = 5 i= 5
