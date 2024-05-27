// ----------------------------Example 2-------------------------------

// Array of numbers
const numbers1 = [1, 2, 3, 4, 5];

// Anonymous function to calculate the sum of an array
const sum = function(arr: number[]): number {
    let total = 0;
    for (const num of arr) {
        total += num;
    }
    return total;
};

const result = sum(numbers1);
console.log(`Sum of the array: ${result}`); // Output: Sum of the array: 15

// ----------------------------Example 2-------------------------------

// Array of numbers
const numbers2 = [5, 3, 7, 1, 4, 2];

// Anonymous function for sorting the array
const sortedArray = function(arr: number[]) {
    return arr.slice().sort((a, b) => a - b);
};

// Call the anonymous function to sort the array
const sortedNumbers = sortedArray(numbers2);

// Display the sorted array
console.log("Sorted Array:", sortedNumbers); // Output: Sorted Array: [1, 2, 3, 4, 5, 7]

// ----------------------------Example 3-------------------------------

// Define the radius of the circle
const radius = 5;

// Anonymous function to calculate the area of a circle
const calculateArea = function(radius: number): number {
    const pi = Math.PI;
    return pi * radius * radius;
};

// Call the anonymous function to calculate the area
const area = calculateArea(radius);

// Display the result
console.log(`Area of the circle with radius ${radius}: ${area.toFixed(2)}`); // Output: Area of the circle with radius 5: 78.54
