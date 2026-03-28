//count words in a string


let str = "Hello world! This is a test string."

function countWords(str) {
    let words = str.trim().split(/\s+/)
    return words.length
}

function largestword(str) {
    let words = str.trim().split(/\s+/)
    let largest = ""
    for(let word of words){
        if(word.length > largest.length){
            largest = word
        }
    }
}