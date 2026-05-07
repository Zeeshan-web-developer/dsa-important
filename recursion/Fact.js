

function fact(n) {
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    return n * fact(n - 1); // Recursive case
}

// Example usage:
console.log(fact(5)); // Output: 120