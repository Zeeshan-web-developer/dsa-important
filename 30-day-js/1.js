//Write a function createHelloWorld. It should return a new function that always returns "Hello World".


const createHelloWorld = () => {
    return function() {
        return "Hello World";
    }

}

// Example usage:
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction()); // Output: "Hello World"
console.log(createHelloWorld()()); // Output: "Hello World"
//time complexity O(n)
//space complexity O(1)
