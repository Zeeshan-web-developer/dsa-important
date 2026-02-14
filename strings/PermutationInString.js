/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */


var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Count = Array(26).fill(0);
    let s2Count = Array(26).fill(0);

    // Initialize counts for s1 and the first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // Slide the window over s2
    for (let i = 0; i < s2.length - s1.length; i++) {
        if (matches(s1Count, s2Count)) return true;
        s2Count[s2.charCodeAt(i) - 97]--;
        s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    }

    // Check the last window
    return matches(s1Count, s2Count);
};

function matches(s1Count, s2Count) {
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) return false;
    }
    return true;
}



/**
 * 
 * Understanding the Sliding Window Mechanism
This is the core of the algorithm! Let me explain step by step with your example:
s1 = "abd", s2 = "cdaabda"

Initial Setup
s1.length = 3

s2.length = 7

Loop runs for i = 0 to i < 7-3 → i < 4 → i = 0, 1, 2, 3

Initial State (Before Loop)
After the first loop (initialization), we have:

s1Count = {a:1, b:1, d:1} (constant throughout)

s2Count = counts of FIRST 3 chars of s2 ("c", "d", "a") = {a:1, c:1, d:1}

Iteration 1: i = 0
Before sliding: Window = indices 0-2 = "cda"

s2Count = {a:1, c:1, d:1}

Step 1: Check if matches s1Count?
{a:1, b:1, d:1} vs {a:1, c:1, d:1} → No (c vs b difference)

Step 2: Slide window right by 1

Remove leftmost char: s2[0] = 'c' → s2Count['c']-- → c:1→0

Add new rightmost char: s2[0+3] = s2[3] = 'a' → s2Count['a']++ → a:1→2

After sliding: Window = indices 1-3 = "daa"

s2Count = {a:2, d:1, c:0}

Iteration 2: i = 1
Before sliding: Window = indices 1-3 = "daa"

s2Count = {a:2, d:1}

Step 1: Check if matches s1Count?
{a:1, b:1, d:1} vs {a:2, d:1} → No (a count mismatch)

Step 2: Slide window right by 1

Remove leftmost char: s2[1] = 'd' → s2Count['d']-- → d:1→0

Add new rightmost char: s2[1+3] = s2[4] = 'b' → s2Count['b']++ → b:0→1

After sliding: Window = indices 2-4 = "aab"

s2Count = {a:2, b:1, d:0}

Iteration 3: i = 2
Before sliding: Window = indices 2-4 = "aab"

s2Count = {a:2, b:1}

Step 1: Check if matches s1Count?
{a:1, b:1, d:1} vs {a:2, b:1} → No (a count mismatch)

Step 2: Slide window right by 1

Remove leftmost char: s2[2] = 'a' → s2Count['a']-- → a:2→1

Add new rightmost char: s2[2+3] = s2[5] = 'd' → s2Count['d']++ → d:0→1

After sliding: Window = indices 3-5 = "abd"

s2Count = {a:1, b:1, d:1}

Iteration 4: i = 3
Before sliding: Window = indices 3-5 = "abd"

s2Count = {a:1, b:1, d:1}

Step 1: Check if matches s1Count?
{a:1, b:1, d:1} vs {a:1, b:1, d:1} → MATCH! Return true
 */