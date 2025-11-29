//Count occurrences of each element in an array and  return maximum occurring element

const arr = ["a","b","c","b","a","a","c","f","b","a","b","a"];


function occurences(arr){
  let map = {};
  let maxCountChar=0;
  for (let i = 0; i < arr.length; i++){
    let char=arr[i];
    if(map[char]){
      map[char]++;
    }else{
      map[char]=1;
    }
    if(map[char]>maxCount){
      maxCountChar=char;
    }
  }
  let obj = {
    char: maxCountChar,
    count: map[maxCountChar]
  }
  return {
    map,
    obj

  }
}

