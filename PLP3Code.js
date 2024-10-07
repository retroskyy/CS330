// Being able to repeat code using functions (which can be called more than once and sent different information each time) is a huge part of most programming languages.  
//However, there are a lot of variations in how functions are declared, where they have to be put, how they accept parameters, and how the function output is returned.  
//In your programming language, do the following (or explain why it can’t be done as described):

// Write a function that takes in two numbers, multiplies them, and returns the output
function multiply(a, b) {
    return a * b;
}

let a = 9;
let b = 2;
let result = multiply(a, b);

console.log("Result: ", result); // Should log 18

// Write a recursive function (one that calculates a factorial is fine)
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num = 5;
let factResult = factorial(num);

console.log("Factorial of ", num, " is: ", factResult); // Should log 120

// Write a function that takes in a string (or your language's equivalent) and splits it into two strings, then returns both strings
function splitString(str) {
    const splitIndex = Math.floor(str.length / 2);
    const firstPart = str.slice(0, splitIndex);
    const secondPart = str.slice(splitIndex);
    return [firstPart, secondPart];
}

const originalStr = "LunaKiwi";
const [firstHalf, secondHalf] = splitString(originalStr);

console.log("First half: ", firstHalf); // Should log "Luna"
console.log("Second half: ", secondHalf); // Should log "Kiwi"

// Call your functions and save the results of the function calls in variables.

// Write a function that tests whether your language is pass-by-reference or pass-by-value
/*
In JavaScript:
Primitive types (e.g., numbers, strings, booleans) are passed by value.
This means a copy of the value is passed to the function, and modifying the copy inside the function does not affect the original variable.
Objects (including arrays and functions) are passed by reference.
This means a reference to the object is passed to the function, and modifying the object inside the function affects the original object. */

function isPassByReference() {
    let obj = { value: 10 };

    function modify(obj) {
        obj.value = 20;
    }

    modify(obj);

    return obj.value === 20; // Returns true if pass-by-reference, false if pass-by-value
}

console.log(isPassByReference()); // Output: true

/*Sources:
https://www.geeksforgeeks.org/javascript-program-to-find-factorial-of-a-number-using-recursion/ 
https://www.geeksforgeeks.org/typescript-string-split-method/ 
https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/
*/

/*Write Up:/*

/*


What is the syntax for declaring a function in your language?
    A JavaScript function is defined with the function keyword, 
    followed by a name, followed by parentheses ().

    Example code:
    function name(parameter1, parameter2, parameter3) {
        // code to be executed
    }

Are there any rules about where the function has to be placed in your code file so that it can run?
    Yes it matters where a function is placed in your code for it to run correctly:
    Function Declarations: Can be called before they are defined due to hoisting.
    Function Expressions and Arrow Functions: Must be defined before they are called.
    Methods: Must be called after their containing object is defined.

Does your language support recursive functions?
    JavaScript allows you to call functions recursively. 
    This is particularly useful for dealing with tree structures, 
    such as those found in the browser DOM.

    Example code:
    function countChars(elm) {
        if (elm.nodeType === 3) {
        // TEXT_NODE
        return elm.nodeValue.length;
     }
     let count = 0;
    for (let i = 0, child; (child = elm.childNodes[i]); i++) {
        count += countChars(child);
    }
    return count;
  }

Can functions in your language accept multiple parameters?  Can they be of different data types?
   JavaScript function definitions do not specify data types for parameters.
   JavaScript functions do not perform type checking on the passed arguments.
   JavaScript functions do not check the number of arguments received.


Can functions in your language return multiple values at the same time?  How is that implemented?  
If not, are there ways around that problem?  What are they?
  One function call can only return one value, |
  but you can simulate the effect of returning multiple values,
  by returning an object or array and destructuring the result.

Is your language pass-by reference or value?  Check your code against outside sources in case there is anything tricky going on (like in Perl).
   JavaScript handles primitives (Boolean, null, undefined, String, and Number) 
   by value and objects (including arrays and functions) by reference. 
   Therefore, changes to a copied primitive value will not affect the original, 
   while changes to a copied object will reflect on the original.

Where are the arguments, parameters and local variables stored (value-on-stack, ref-to-heap-on stack) during execution?
    Stack: Stores function parameters (primitive values) and local variables.
    Heap: Stores complex data types like objects and arrays, with references to them stored on the stack.
        
        Stack Memory:

        Function Execution Context: Each time a function is invoked, a new execution context is created. This context is stored on the call stack.
        Parameters: When you call a function, the values of the arguments are copied to the function's parameters and stored on the stack. 
        For primitive types (like numbers, strings, booleans), this means the actual values are stored directly on the stack.
        Local Variables: Local variables declared within the function are also stored on the stack. This includes any variable declarations made using let, const, or var within the function.

        Heap:
        Objects and Arrays: When you create objects or arrays, they are stored in the heap memory. 
        The variables that reference these objects are stored on the stack, but the actual object data resides in the heap. 
        The stack contains references (pointers) to the objects in the heap.



What are the scoping rules in your language (visibility and lifetime of variables before, during and after code blocks)?
    JavaScript variables have 3 types of scope:

    Block scope
        Description: Variables declared with let and const within a block (e.g., inside {}) are only accessible within that block.
    Function scope
        Description: Variables declared with var inside a function are accessible throughout the function.
    Global scope
        Description: Variables declared outside of any function or block are globally accessible throughout the code.


Are side-effects possible? Are there guard rails against side-effects?
    A side effect occurs when a function modifies some state or interacts with the outside world outside of its local environment. 
    This can include:
        Modifying global variables
        Changing the contents of an object or an array
        Performing I/O operations (like logging to the console or updating the DOM)
        Calling other functions that have side effects

        JavaScript itself does not provide built-in guard rails against side effects, but developers can adopt certain practices and patterns to mitigate them:

            Pure Functions:

            Pure functions always produce the same output for the same input and do not cause side effects. 
            Using pure functions can help manage and minimize side effects.

Where are local variable values stored? (on the stack? On the heap?)
    Local Variable Values: Local variables are typically stored on the stack. 
    The stack is a region of memory that stores information about the active subroutines of a computer program, 
    including local variables and function call information.

    Heap: The heap is used for storing larger data structures like objects and arrays. 
    When you create an object or an array, a reference to that object is stored on the stack, 
    but the actual object is allocated on the heap.

Are there any other aspects of functions in your language that aren't specifically asked about here, but that are important to know in order to write one? 
 What are they? (e.g. dynamic vs static scope)
    JavaScript uses lexical (static) scope, meaning the scope of a variable is determined by its location within the source code, not the calling context. 
    The value of this can vary depending on how a function is called.
 


 
Sources:
https://mayanovarini.medium.com/functions-in-javascript-declaration-expression-arrow-d6f907dc850a#:~:text=There%20is%20also%20%E2%80%9CArrow%20Function,in%20the%20main%20code%20flow.&text=Function%20Expressions%20are%20created%20inside,such%20as%20a%20variable%20declaration.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview 
https://www.w3schools.com/js/js_function_parameters.asp 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions 
https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175#:~:text=Remember%2C%20JavaScript%20handles%20primitives%20(Boolean,will%20reflect%20on%20the%20original. 
/*