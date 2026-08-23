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
    const dp = new Array(amount + 1).fill(Infinity); //why fill with Infinity? because we want to find the minimum number of coins, so we initialize the dp array with Infinity to represent that initially, we assume it's impossible to make that amount. As we compute the minimum coins needed for each amount, we will update these values accordingly. If we find a valid combination of coins that can make up a certain amount, we will replace the Infinity with the actual number of coins needed. If after processing all coin denominations, dp[amount] remains Infinity, it means there is no valid combination of coins to make that amount, and we will return -1 in that case.
    dp[0] = 0; // Base case: no coins needed to make amount 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) { //this loop iterates through each coin denomination for the current amount i. It checks if the coin can be used to make up the amount by verifying if i - coin is a valid index (i.e., non-negative). If it is valid, it updates the dp[i] value to be the minimum of its current value and dp[i - coin] + 1 (which accounts for using one more coin).
            if (i - coin >= 0) { // Check if the coin can be used for the current amount ,suppose we are trying to make amount 3 and we have a coin of denomination 2, we can use that coin if 3 - 2 >= 0, which is true. This check ensures that we only consider valid coins that can contribute to the current amount. but if we have a coin of denomination 4, we cannot use it to make amount 3 because 3 - 4 < 0, so we skip that coin.
                dp[i] = Math.min(dp[i], dp[i - coin] + 1); //why dp[i-coin] is bacsilly when we any coin , what is the reamaing amout --
                
                // +1 for the current coin
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // Return -1 if no solution found

    //dp[i-coin] means basiclly if i use current coin  (isngle coin) what is the remaining amount i need to make and how many coins i need to make that remaining amount which is dp[i-coin] and then we add 1 for the current coin we are using
    //sppose if i have make 9 ,if i use coin 5 a single coin, then remaing is 4,as we already calulcated 4
    //+1 is for current coin
}



// amount to make we have two coins 1 and 2 and we want to make 3
//if i use coin 1 
//remaing is 2 -- we know from dp array to make 2 dp[2]=1 because we can use one coin of 2 to make 2
//so to make 3 using coin 1 we need dp[2]+1 = 1+1 = 2 coins (one coin of 2 and one coin of 1)
