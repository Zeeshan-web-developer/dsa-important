// Find longest word in a sentence

const sentence = "The quick brown fox jumps over the lazy dog";

function maxLengthWord(sentence) {
    const words = sentence.split(' '); // Split the sentence into words
    let maxLength = 0; // Initialize maximum length
    let longestWord = ""; // Initialize longest word

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) { // Check if current word is longer
            maxLength = words[i].length; // Update maximum length
            longestWord = words[i]; // Update longest word
        }
    }

    return longestWord; // Return the longest word found
}

//another  appriach
let word="the first one was the best but the only reason why I don’t want you zeeshan_ah_dar";


const newarray=word.split(" ");
function getLength(){
  let maxword=newarray[0]
  for(let i=0;i<newarray.length;i++){
    if(maxword.length<newarray[i].length){
      maxword=newarray[i]
    }
  }
  console.log(maxword)
}

getLength()