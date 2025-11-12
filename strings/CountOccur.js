//Find frequency of each character


const str = "hello world";

function countCharacterFrequency(str) {
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== ' ') { // Ignore spaces
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }
        }
    }
    return frequency;
}