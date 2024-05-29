// -------------------- Example 1 ---------------------

let pass: string | number;

pass = "Marjan";
console.log(pass.toUpperCase());

pass = 123;
//console.log(pass.toUpperCase()); // Error message
console.log(pass.toExponential());

// -------------------- Example 2 ---------------------

let newAge = Math.random() > 0.6? "Khan": 60;
console.log(newAge)

if(typeof newAge === "number")
    console.log(newAge.toExponential());


else 
    console.log(newAge.charAt);

// -------------------- Example 3 ---------------------

function processValue(value: string | number | boolean) {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (typeof value === 'number') {
        return value ** 2;
    }
    else if (typeof value === 'boolean') {
        return !value
    };
};

console.log(processValue("Marjan"));
console.log(processValue(7));
console.log(processValue(true));
console.log(processValue(false));