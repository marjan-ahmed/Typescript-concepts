let car = {
    name: "Ford",
    model: "Mustang",
    year: 1969
};

console.log(car.name);
console.log(car['model']);

// Type Declarations

let user : {
    name: string,
    age: number
};

user = {
    name: "Hira",
    age: 30
};

console.log(user['name']);
console.log(user.age)
