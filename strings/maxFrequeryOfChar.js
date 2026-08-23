//find the maximum frequency of a character in a string

function maxFrequency(str) {
    const frequency = {};
    let maxFreq = 0;
    let maxChar = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== ' ') { // Ignore spaces
            if (frequency[char]) {
                frequency[char]++;
            } else {
                frequency[char] = 1;
            }

            if (frequency[char] > maxFreq) {
                maxFreq = frequency[char];
                maxChar = char;
            }
        }
    }

    return { character: maxChar, frequency: maxFreq };
}