//reverse a string


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

var reverseString = function(s) {
 
 let left=0;
 let right=s.length-1

 while(left<right){
    [s[left],s[right]]=[s[right],s[left]]
    left++;
    right--;
 }
 return s;
};