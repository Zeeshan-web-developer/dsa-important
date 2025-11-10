
//Find missing number in a series (e.g., [1,2,3,5])


const arr = [1, 2, 3, 5];

function findMissingNumber(arr) {
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) { //means current number +1 is not equal to next number
            return arr[i] + 1; // Return the missing number
        }
    }

}

console.log(findMissingNumber(arr)); // Output: 4



//Find all missing numbers in a series (e.g., [5,6,7,8,9,10,11,12,13,14,15,20])


const arr2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20];

function findAllMissingNumbers(arr) {
    const missingNumbers = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        while (current + 1 < next) {
            missingNumbers.push(current + 1);
            current++;
        }
    }
    return missingNumbers;
}

//current number 5 next 6
//while 5+1<6 =>6<6 false 
//current number 15 next 20
//while 15+1<20 =>16<20 true push 16