

function maximum(arr,index = 0) {
  if (index === arr.length - 1) {
    return arr[index];
  }
  const maxOfRest = maximum(arr, index + 1);
  return arr[index] > maxOfRest ? arr[index] : maxOfRest;
}

// Example usage:
console.log(maximum([3, 1, 4, 1, 5, 9])); // Output: 9