

// Given two arrays representing two numbers, add the numbers and return the result as an array. 
//Each element in the array represents a single digit, and the digits are stored in 
//reverse order(i.e., the least significant digit is at index 0).

// Example:
// let num1 = [2, 4, 3], num2 = [5, 6, 4]
// output: [7, 0, 8] // Explanation: 342 + 465 = 807   

let  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]


function sumWithCarry(){
  
  let carry=0
  let i=0
  let result=[]
  
  while(i<l1.length || i<l2.length|| carry){
    let val1=i<l1.length?l1[i]:0
    let val2=i<l2.length?l2[i]:0
    let sum=val1+val2+carry
    
    result.push(sum%10)
    carry=Math.floor(sum/10)
    i++

    
  }
  return result.join("")
}
console.log(sumWithCarry())