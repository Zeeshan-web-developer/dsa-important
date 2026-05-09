function counteven(arr, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  const isEven = arr[index] % 2 === 0 ? 1 : 0;
  return isEven + counteven(arr, index + 1);
}

// Example usage:
console.log(counteven([1, 2, 3, 4, 5, 6])); // Output: 3