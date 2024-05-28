let myname: unknown = "Marjan Ahmed";

console.log((myname as string).length);
//               OR
console.log((<string> myname).length)

//-------------------------------------

let num1: unknown = 5;
let num2: string = "7";
let convertString = num1 as typeof num2;

console.log(convertString);
console.log(typeof num1)

//-------------------------------------

//Casting to a Specific Object Type:
interface User {
  name: string;
  age: number;
}

let user: any = {
  name: "Alice",
  age: 30
};

let typedUser = <User>user;
console.log(typedUser.name); // Output: Alice
