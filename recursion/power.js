

function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Base case: any number to the power of 0 is 1
    }
    return base * power(base, exponent - 1); // Recursive case
}

// Example usage:
console.log(power(2, 3)); // Output: 8