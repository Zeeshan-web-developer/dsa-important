/**
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.


 */

function cancellable(fn, args, t) {

    const  cancelFn=function() {
        clearTimeout(timeoutId); // Cancel the scheduled execution of fn
    }
    let timeoutId = setTimeout(() => {
        fn(...args); // Execute the function with the provided arguments after t milliseconds
    }, t);


return cancelFn;
  
}