//remove spaces 

function removeSpaces(str) {
    let result = str.replace(/\s/g, "")
    return result
}


console.log(removeSpaces("Hello world! This is a test string."))