// --------------------Example 1------------------------

// Define type alias
type Person = {
    name: string;
    age: number;
    isMarried: boolean;
};

// Create an object including the defined type alias
let person: Person = {
    name: "Marjan Ahmed",
    age: 15,
    isMarried: false
};

// --------------------Example 2------------------------

type Operator = (
    x: number,
    y: number
) => number;

let sum: Operator = (x , y) => x + y;
let minus: Operator = (x,y) => x - y;

console.log(sum(2,8));
console.log(minus(2,8));

