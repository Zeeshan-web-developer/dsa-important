
function sum(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  return arr[index] + sum(arr, index + 1);
}

module.exports = sum;

// Example usage:
 console.log(sum([1, 2, 3, 4],0)); // Output: 10