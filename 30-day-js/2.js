//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


function counter(n) {
    let count = n - 1; // Initialize count to n - 1 so that the first call returns n
    return function() {
        count += 1;   // Increment count by 1
        return count;
    }
}

// Example usage:
const myCounter = counter(5);
console.log(myCounter()); // Output: 5
console.log(myCounter()); // Output: 6
console.log(myCounter()); // Output: 7
console.log(myCounter()); // Output: 8