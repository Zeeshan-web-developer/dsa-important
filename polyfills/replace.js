String.prototype.myReplace = function (searchValue, replaceValue) {

    let str = this.toString();
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === searchValue) {
            words[i] = replaceValue;
            break; // Replace only the first occurrence
        }
    }
    return words.join(" ");
}
 

String.prototype.myReplaceAll = function (searchValue, replaceValue) {

    let str = this.toString();
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === searchValue) {
            words[i] = replaceValue;
        }
    }
    return words.join(" ");
}

//
function customReplace(str, searchValue, replaceValue, replaceAll = false) {
    let words= str.split(" ");
   if(replaceAll){
   return words.map(word => word === searchValue ? replaceValue : word).join(" ");
   }
    for (let i = 0; i < words.length; i++) {
         if (words[i] === searchValue) {
              words[i] = replaceValue;
              break; // Replace only the first occurrence
         }
    }
    return words.join(" ");
}
