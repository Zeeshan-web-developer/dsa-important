//Count occurrences of each element in an array

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 1, 2, 3, 4, 5, 5, 5, 5];

// function countOccurrences(array) {
//     const occurrenceMap = {};

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (occurrenceMap[element]) {
//             occurrenceMap[element]++;
//         } else {
//             occurrenceMap[element] = 1;
//         }
//     }

//     return occurrenceMap;
// }


function occurences(arr){
  let map={};
  for(let i=0;i<arr.length;i++){
    map[arr[i]]=map[arr[i]]+1||1
  }
  return map;
}

