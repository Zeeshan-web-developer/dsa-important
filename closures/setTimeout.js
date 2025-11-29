// for(let i=0;i<=5;i++){
//   setTimeout(function() {
//     console.log(i)
//   }, i*1000);
// }


function usingVar(){
  
  for(let i=0;i<5;i++){
   (function(i){
      setTimeout(function() {
        console.log(i)
      }, i*1000);
   })(i)
  }
}

usingVar()