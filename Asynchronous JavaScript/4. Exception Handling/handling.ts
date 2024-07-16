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
            reject("Drying done!!");
        },2000)
    })
}
async function runWashingMachine() {
    try{
        const result1 = await soaking();
        console.log(result1);
        const result2 = await drying();
        console.log(result2);
        const result3 = await washing();
        console.log(result3);
        console.log('Washing machine started');
    }
    catch(error) {
        console.log("Error: " + error);
    }

    finally{
        console.log("I will run anyway...");
    }
    
}

runWashingMachine();