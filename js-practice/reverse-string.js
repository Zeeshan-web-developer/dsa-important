//reverse a string

function reverseString(str) {
    let reversed = ""
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    return reversed
}

//other way to reverse a string
function reverseString2(str) {
    return str.split("").reverse().join("")
}

//other way to reverse a string
function reverseString3(str) {
    let reversed = ""
    for(let char of str){
        reversed = char + reversed
    }
    return reversed
}