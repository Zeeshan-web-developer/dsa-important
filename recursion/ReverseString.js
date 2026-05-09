
function reverseString(str) {
    if (str === "") {
        return ""; // Base case: empty string is its own reverse
    }
    return reverseString(str.substring(1)) + str.charAt(0); // Recursive case
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"