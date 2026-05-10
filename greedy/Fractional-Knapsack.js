function fractionalKnapsack(capacity, items) {
  // Sort items based on value/weight ratio
  items.sort((a, b) => {
    return (b.value / b.weight) - (a.value / a.weight);
  });

  let totalValue = 0;

  for (let item of items) {

    // If whole item can fit
    if (capacity >= item.weight) {
      capacity -= item.weight;
      totalValue += item.value;
    } 
    
    // Take fraction of item
    else {
      let fraction = capacity / item.weight;
      totalValue += item.value * fraction;
      break;
    }
  }

  return totalValue;
}


// Example
const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];

const capacity = 50;

console.log(fractionalKnapsack(capacity, items));

// Example usage:
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;

console.log(knapsack(weights, values, capacity)); // Output: 240