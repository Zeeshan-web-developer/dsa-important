/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 */


//brute force approach O(m*n log n)

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join(''); //sort each string to find anagrams

        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str); //if sorted string exists, push original string to its array
        } else {
            map.set(sortedStr, [str]); //else create a new array with the original string
        }
    }

    return Array.from(map.values()); //return all grouped anagrams
   
}

//optimal approach O(n)

//use character count as key

var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0); //assuming only lowercase letters

        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++; //count frequency of each character
        }

        const key = count.join('#'); //create a unique key based on character counts

        if (map.has(key)) {
            map.get(key).push(str); //if key exists, push original string to its array
        } else {
            map.set(key, [str]); //else create a new array with the original string
        }
    }

    return Array.from(map.values()); //return all grouped anagrams
}