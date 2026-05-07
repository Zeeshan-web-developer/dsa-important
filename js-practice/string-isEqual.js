//check if two strings are equal without using built-in methods

let str1 = "hello"
let str2 = "hello"

function isEqual(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return false
        }
    }
    
    return true
}

