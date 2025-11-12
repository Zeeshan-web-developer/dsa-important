//Count vowels and consonants


function countVowelsConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}