

function debounce(fn, delay) {
   let timer = null;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function searching(...args) {
  console.log("Searching", ...args);
}

let search = debounce(searching, 3000);

search("JavaScript","hello");     
