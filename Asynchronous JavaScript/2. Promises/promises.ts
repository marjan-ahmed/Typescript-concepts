// Initializing Promises
function washing() {
    console.log('Washing started');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing done");
        },4000)
    })
}

function soaking() {
    console.log('Soaking started');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking done!!");
        },3000)
    })
}

function drying() {
    console.log('Drying started');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying done!!");
        },2000)
    })
}

// Usage
washing().then((value) => {
    console.log(value);
    return soaking();
 })
.then((value) => {
    console.log(value);
    return drying();
 })
.then((value) => {
    console.log(value);
 })
 .catch((err) => {
    console.log("Error: ",err);
 })
.finally(() => {
    console.log("This will be run");
    
 })
