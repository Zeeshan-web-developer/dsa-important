//two pointer approach
let nums = [1, 2, 3, 4, 5, 6, 7];

let start = 0;
let end = nums.length - 1;

while (start <= end) {
  if (start === end) {
    console.log(nums[start]);
  } else {
    console.log(nums[start] + "," + nums[end]);
  }
  start++;
  end--;
}

//start = 0, end = 6 => print 1,7
//start = 1, end = 5 => print 2,6 
//start = 2, end = 4 => print 3,5
//start = 3, end = 3 => print 4


let head = [1,2,3,4,5]


//brute force approach
// function revert(){
//   let newarray = []
  
//   for(let i = 0; i < Math.floor(head.length/2); i++){
//     newarray.push(head[i], head[head.length - i - 1])
//   }

//   // handle middle element (odd length)
//   if(head.length % 2 !== 0){
//     newarray.push(head[Math.floor(head.length/2)])
//   }

//   console.log(newarray)
// }

// revert()