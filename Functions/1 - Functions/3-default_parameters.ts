// --------------------------Example 1---------------------------

function menu(dish1:string ="chinese rice", dish2:string ="Chicken Qourma") {
    let message = `${dish1} and ${dish2}`;
   return message
};

let marjanOrder = `I want ${menu()}`;
let sufyanOrder = `I want ${menu("Haleem", "Malir Boti")}`; 

console.log(marjanOrder);
console.log(sufyanOrder);

// --------------------------Example 2---------------------------

const Area = (width: number=10, height: number = 4) => {
    console.log(`${width * height} cm`);
};

let defaultBox = Area() // 40
let cube = Area(2,3) // 6cm
