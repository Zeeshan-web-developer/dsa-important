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


//reveerse words in a string
let str="i love javascript"


function reverseWords(){
let arr=str.split(" ")
let reversed=[];

for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i])
}
console.log(reversed.join(" "))
}

//other way to reverse words in a string
function reverseWords2(str){
    return str.split(" ").reverse().join(" ")
}