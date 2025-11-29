


// example call delay is 1hr
//right now time is 10:00am
//call call 9:30am -> executes

//is new allowed
//10:00am - 9:30am = 30min < 1hr not allowed

function throttle(fn, delay) {
    let lastcall = 0;

    return function (...args) {
        let now = new Date().getTime();

        if( now - lastcall >= delay ) {
            lastcall = now;
            return fn.apply(this, args);
        }
    }
    
}

function logMessage(message) {
    console.log("Log:", message, "at", new Date().toLocaleTimeString());
}
let throttledLog = throttle(logMessage, 5000); // 5 seconds delay
throttledLog("First Call"); // Executes immediately

//gets ignored , because within 5 seconds of first call
setTimeout(() => throttledLog("Second Call after 3 seconds"), 3000); // Ignored
//executes after 6 seconds from first call
setTimeout(() => throttledLog("Third Call after 6 seconds"), 6000); // Executes
// ignored , because within 5 seconds of third call so gap is 4 seconds
setTimeout(() => throttledLog("Fourth Call after 10 seconds"), 10000); // ignored

// executes after 12 seconds from first call gap of 6 seconds from third call
setTimeout(() => throttledLog("Fifth Call after 12 seconds"), 12000); // Ignored 