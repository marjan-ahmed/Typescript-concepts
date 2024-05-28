const enum Colour {
    Red,    //0
    Yellow,  //1
    Green  //2
};

// If you make enum with const keyword, then this property will only access (const)
let colourNum : Colour = Colour.Yellow;

console.log("Enum with const");
console.log(colourNum,"\n");

// Only typescript allows you to include more properties on enum (no const) 
console.log("Simple Enum");

enum Color {
  Red, 
  Yellow,
  Green
};
  
console.log(Color[0]) // output: Red
console.log(Color.Red) //output: 0 
console.log(Color["Red"]) //output: 0
console.log(Color.Yellow) //output: 1
console.log(Color.Green) //output: 2