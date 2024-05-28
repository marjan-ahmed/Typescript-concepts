function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: boolean, y: boolean): number;

function add(x: any, y: any): any {
    return x + y;
}

let func1 = add("Marjan", "Ahmed");
let func2 = add(4,6);
let func3 = add(true, true);

console.log(func1); // MarjanAhmed
console.log(func2); // 10
console.log(func3); // 2