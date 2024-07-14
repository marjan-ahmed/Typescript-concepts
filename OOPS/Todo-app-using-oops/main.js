#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    calculateArea() {
        return 0;
    }
    displayArea() {
        console.log(chalk.yellow.bold(`Area of ${this.name}: ${this.calculateArea()}`));
    }
}
class Square extends Shape {
    side;
    constructor(side, name) {
        super(name);
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, name) {
        super(name);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    length;
    width;
    constructor(length, width, name) {
        super(name);
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
}
const promptUser = async () => {
    const userInput = await inquirer.prompt({
        name: "shape",
        type: "list",
        message: "Select the Shape:",
        choices: [
            { name: "Square", value: "sq" },
            { name: "Circle", value: "cr" },
            { name: "Rectangle", value: "rt" }
        ]
    });
    let shape = null;
    switch (userInput.shape) {
        case "sq":
            const squareResponse = await inquirer.prompt({
                name: "side",
                type: "input",
                message: "Enter the side length of the square:",
                validate: (value) => {
                    const parsed = parseFloat(value);
                    return !isNaN(parsed) && parsed > 0;
                }
            });
            shape = new Square(parseFloat(squareResponse.side), "Square");
            break;
        case "cr":
            const circleResponse = await inquirer.prompt({
                name: "radius",
                type: "input",
                message: "Enter the radius of the circle:",
                validate: (value) => {
                    const parsed = parseFloat(value);
                    return !isNaN(parsed) && parsed > 0;
                }
            });
            shape = new Circle(parseFloat(circleResponse.radius), "Circle");
            break;
        case "rt":
            const rectangleResponse = await inquirer.prompt({
                name: "length",
                type: "input",
                message: "Enter the length of the rectangle:",
                validate: (value) => {
                    const parsed = parseFloat(value);
                    return !isNaN(parsed) && parsed > 0;
                }
            });
            const rectangleWidthResponse = await inquirer.prompt({
                name: "width",
                type: "input",
                message: "Enter the width of the rectangle:",
                validate: (value) => {
                    const parsed = parseFloat(value);
                    return !isNaN(parsed) && parsed > 0;
                }
            });
            shape = new Rectangle(parseFloat(rectangleResponse.length), parseFloat(rectangleWidthResponse.width), "Rectangle");
            break;
        default:
            console.log(chalk.red("Invalid choice."));
            break;
    }
    if (shape) {
        shape.displayArea();
    }
};
promptUser();
