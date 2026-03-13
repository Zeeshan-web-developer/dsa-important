let nums = [1,2,3,4,5,6,7];

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