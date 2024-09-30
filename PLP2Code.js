let myInt = 22;
console.log("myInt:", myInt); // Output: myInt: 22

let myString = "Hello, world!"; // String
console.log("myString:", myString); // Output: myString: Hello, world!

let myFloat = 2.09; // Floating-point number
console.log("myFloat:", myFloat); // Output: myFloat: 2.09

let isBoolean = true; // Boolean
console.log("isBoolean:", isBoolean); // Output: isBoolean: true

let myArray = [1, 2, 3, 4, 5]; // Array
console.log("myArray:", myArray); // Output: myArray: [1, 2, 3, 4, 5]


let myDictionary = { key1: "value1", key2: "value2" };
console.log("myDictionary:", myDictionary); // Output: myDictionary: { key1: 'value1', key2: 'value2' }

const PI = 3.14159; // Immutable Global Variable
console.log("PI:", PI); // Output: PI: 3.14159

var mutableGlobalVar = "change"; // Mutable Global Variable
console.log("mutableGlobalVar:", mutableGlobalVar); // Output: mutableGlobalVar: change

// Function Declaration following Naming Conventions
function calculateSum(a, b) {
    return a + b;
}
console.log("calculateSum(5, 7):", calculateSum(5, 7)); // Output: calculateSum(5, 7): 12

// Boolean Variable Example
let hasCompletedTask = false;
console.log("hasCompletedTask:", hasCompletedTask); // Output: hasCompletedTask: false

// Example of Mixed Type Operation
let mixedTypeResult = "5" + 6; // Results in the string "56"
console.log("mixedTypeResult:", mixedTypeResult); // Output: mixedTypeResult: 56

// Example of Type Coercion
let coercedTypeResult = "5" * 6; // Results in the number 30
console.log("coercedTypeResult:", coercedTypeResult); // Output: coercedTypeResult: 30

//  ---> This line will result in the string "56" due to type coercion. The number 6 is converted to a string and concatenated with "5".
x = "5" + 6

console.log("x:", x); // Output: x: 56