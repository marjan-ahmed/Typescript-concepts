interface Deal1 {
    food: string;
};

interface Deal2 {
    food: string;
    drink: string;
};

let myOrder : Deal1 = {
    food: "Family Package"
};

let friendOrder : Deal2 = {
    food: "Family Package",
    drink: "2.5L Cola"
}

let myTable = myOrder = friendOrder
// let friendtable = friendOrder = myOrder // error occurred because typescript does not support deal less properti from other interfaces.

console.log(myOrder.food) // It is deal1
console.log(myTable) // It become deal2
console.log(friendOrder)