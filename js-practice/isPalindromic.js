//is palindromic string

function isPalindromic(str) {
    const cleanedStr = str.replace(/\s/g, "").toLowerCase()
   for(let i=0;i<cleanedStr.length/2;i++){
       if(cleanedStr[i] !== cleanedStr[cleanedStr.length-1-i]){
           return false
       }
   }
    return true
}
