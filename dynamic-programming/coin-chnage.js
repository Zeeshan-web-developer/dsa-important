//coin chnage problem

// The coin change problem is a classic dynamic programming problem that asks for the minimum number of coins needed to make a certain amount of money given a set of coin denominations.

// For example, if you have coin denominations of [1, 2, 5] and you want to make the amount of 11, the minimum number of coins needed would be 3 (5 + 5 + 1).

// The problem can be solved using a dynamic programming approach by creating an array that stores the minimum number of coins needed for each amount from 0 to the target amount.
//

//brute force approach
function coinChange(coins, amount) {
    if (amount === 0) {
        return 0; // Base case: no coins needed to make amount 0
    }
    if (amount < 0) {
        return -1; // Base case: no solution for negative amounts
    }
    
    let minCoins = Infinity;
    
    for (let coin of coins) {
        const result = coinChange(coins, amount - coin);
        if (result >= 0) {
            minCoins = Math.min(minCoins, result + 1); // +1 for the current coin
        }
    }
    
    return minCoins === Infinity ? -1 : minCoins; // Return -1 if no solution found
}

// Example usage:1,2  make 3

//graphical representation of the recursive calls for coinChange([1, 2], 3):

// coinChange([1, 2], 3)
// ├── coinChange([1, 2], 2) // using coin 1
// │   ├── coinChange([1, 2], 1) // using coin 1
// │   │   ├── coinChange([1, 2], 0) // using coin 1 (base case: returns 0)
// │   │   └── coinChange([1, 2], -1) // using coin 2 (base case: returns -1)
// │   └── coinChange([1, 2], 0) // using coin 2 (base case: returns 0)
// └── coinChange([1, 2], 1) // using coin 2
//     ├── coinChange([1, 2], 0) // using coin 1 (base case: returns 0)
//     └── coinChange([1, 2], -1) // using coin 2 (base case: returns -1)



// The time complexity of this brute-force approach is O(n^m), where n is the number of coin denominations and m is the target amount. This is because in the worst case, we explore all combinations of coins to make up the amount.

//dynamic programming approach
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: no coins needed to make amount 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) { // Check if the coin can be used for the current amount ,suppose we are trying to make amount 3 and we have a coin of denomination 2, we can use that coin if 3 - 2 >= 0, which is true. This check ensures that we only consider valid coins that can contribute to the current amount. but if we have a coin of denomination 4, we cannot use it to make amount 3 because 3 - 4 < 0, so we skip that coin.
                dp[i] = Math.min(dp[i], dp[i - coin] + 1); // +1 for the current coin
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // Return -1 if no solution found
}


