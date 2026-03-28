//first non repeating character in a string

let str = "leetcode"

function firstNonRepeating(str) {
    const map = new Map();

    for(let ch of str){
        if(map.get(ch)){
            map.set(ch,map.get(ch)+1)
        }
        else{
            map.set(ch,1) 
        }
    }
    for(let ch of str){
        if(map.get(ch)===1) return ch
    }
    return null
}