// A function that takes a parameter and arguments of another function is callback function

// Expect callback function 
function parentFunc(func: () => void): void {
    console.log("I am a parent function");
    func();
}

// Calling the parent function with a callback function.
function childFunc() {
    console.log("I am a child function");
}

parentFunc(childFunc)

