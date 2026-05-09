

function isPalindrome(str) {
    if (str.length <= 1) {
        return true; // Base case: empty string or single character is a palindrome
    }
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false; // If the first and last characters don't match, it's not a palindrome
    }
    return isPalindrome(str.substring(1, str.length - 1)); // Recursive case
}