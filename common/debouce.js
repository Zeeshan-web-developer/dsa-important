
function debounce(fn,delay){
  let timer="";
  
  return function(){
    clearTimeout(timer)
    timer=setTimeout(function(...args) {
      fn.apply(this.arg)
    }, delay);
  }
}


let search=debounce(function(){
  console.log("Searching")
}
    , 3000)

search()