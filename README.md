JAVASCRIPT FOR BEGINNERS 

Topic 1: Data Types & Naming Conventions in JavaScript [PLP 2]

Naming Conventions in JavaScript
  
  General Conventions:
  - Case Sensitivity: JavaScript variable names are case-sensitive.
  - Camel Case: Use camel case for mutable global variables (e.g., mutableGlobalVar) and uppercase for immutable global variables (e.g., IMMUTABLE_GLOBAL_VAR).
  - Start with a Letter: Variables must start with a letter, underscore (_), or dollar sign ($). They cannot start with numbers or other symbols.
  
  Examples:
  - Correct: myVariable, _myVariable, $myVariable
  - Incorrect: 1myVariable, -myVariable

Usage of Camel Case
- JavaScript programmers typically use camel case for variable names (e.g., lastName) instead of underscores (e.g., last_name).

Common Data Types in JavaScript

  Below is an example demonstrating variables of common data types in JavaScript, following the naming conventions.
  
    let myInt = 22; // Integer
    let myString = "Hello, world!"; // String
    let myFloat = 2.09; // Floating-point number
    let isBoolean = true; // Boolean
    let myArray = [1, 2, 3, 4, 5]; // Array
    let myDictionary = { key1: "value1", key2: "value2" }; // Dictionary (Object)

Keywords and Reserved Words
- JavaScript has keywords and reserved words that have special meanings and cannot be used as identifiers (variable names, function names, etc.).
  
Keywords Examples
- async
- await
- class
  
Reserved Words Examples
- if
- else
- for
- function
- var
- let
- const
  
Variable Naming Requirements
- Camel Case: Use camel case for variables (e.g., myVariable).
- Descriptive Names: Variable names should be descriptive to indicate their content and usage.
- Uppercase for Globals: Use uppercase for global constants (e.g., PI).
- Prefixes for Booleans: Use prefixes like is or has for Boolean variables (e.g., isComplete).

JavaScript: Statically or Dynamically Typed?
- JavaScript is a dynamically typed language, meaning variable types are determined at     runtime, not during declaration. It is also weakly typed, allowing mixed type operations with type coercion.

Mutable and Immutable Variables
  In JavaScript, objects and arrays are mutable, whereas primitive values (like numbers and strings) are immutable.

  Examples
    const PI = 3.14159; // Immutable
    var mutableVar = "change"; // Mutable

Operators in JavaScript
  Arithmetic Operators: +, -, *, /, %, ++, --
  Assignment Operators: =, +=, -=, *=, /=, %=
  Comparison Operators: ==, !=, ===, >, <, >=, <=
  Logical Operators: &&, ||, !
  
Mixed Type Operations
  JavaScript allows mixed type operations due to its weak typing. Type coercion automatically converts types as needed.

Example of Type Coercion
  let mixedTypeResult = "5" + 6; // Results in the string "56"
  let coercedTypeResult = "5" * 6; // Results in the number 30

Binding of Identifiers and Operators
  In JavaScript:
    Variable Declarations: Bind at runtime.
    Function Declarations: Bind at parse time.
    Class Declarations: Bind at runtime.
-----------------------------------------------------------------------
Example Code
Below is a piece of code demonstrating the discussed features:


// Global Variable Example
const PI = 3.14159; // Immutable Global Variable
var mutableGlobalVar = "change"; // Mutable Global Variable

// Function Declaration following Naming Conventions
function calculateSum(a, b) {
    return a + b;
}

// Boolean Variable Example
let hasCompletedTask = false;

// Example of Mixed Type Operation
let mixedTypeResult = "5" + 6; // Results in the string "56"

// Example of Type Coercion
let coercedTypeResult = "5" * 6; // Results in the number 30

---------------------------------------------------------------------------------
Illustrative Example
If you include this line in a program and try to print x, what does it do?
x = "5" + 6;
console.log(x); // Output: 56

This line will result in the string "56" due to type coercion. The number 6 is converted to a string and concatenated with "5". This will compile and run without issues in JavaScript.
---------------------------------------------------------------------------------
Limitations of JavaScript
  Flexibility with Types: Can lead to unexpected behavior due to implicit type coercion.
  Mutable vs. Immutable: Only objects and arrays are mutable, not primitive values.

Common Complex Data Types
  JavaScript commonly uses objects and arrays as complex data types.

Sources
MDN Web Docs: JavaScript Data Structures
W3Schools: JavaScript Tutorial


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Topic 2: Functions in JavaScript [PLP3]

Declaring Functions
  In JavaScript, functions can be declared using the function keyword followed by a name and parentheses ().
      
    function multiply(a, b) {
        return a * b;
    }

  Here, multiply is a function that takes two parameters a and b, and returns their product.

Calling Functions
  You can call a function by using its name followed by parentheses, passing the necessary   arguments.
  
    let a = 9;
    let b = 2;
    let result = multiply(a, b);
    console.log("Result: ", result); // Should log 18

Recursive Functions
Recursive functions are functions that call themselves. They are useful for problems that can be divided into similar sub-problems, such as calculating factorials.
function factorial(n) 

    {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    
    let num = 5;
    let factResult = factorial(num);
    console.log("Factorial of ", num, " is: ", factResult); // Should log 120

Function Parameters and Return Values
Functions in JavaScript can accept multiple parameters and return a single value. However, you can return multiple values using arrays or objects.

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

Pass-by-Reference vs. Pass-by-Value
JavaScript handles primitives by value and objects by reference. This distinction is crucial for understanding how function parameters are treated.

    function isPassByReference() {
        let obj = { value: 10 };

        function modify(obj) {
            obj.value = 20;
        }
    
        modify(obj);
    
        return obj.value === 20; // Returns true if pass-by-reference, false if pass-by-value
        }
        
        console.log(isPassByReference()); // Output: true

Scoping Rules
  JavaScript has three types of scope: block, function, and global.
    Block Scope: Variables declared with let and const inside a block {} are only accessible within that block.
    Function Scope: Variables declared with var inside a function are accessible throughout the function.
    Global Scope: Variables declared outside of any function or block are accessible throughout the code.
    
Additional Considerations
  Hoisting: Function declarations are hoisted, meaning they can be called before they are defined.
  Arrow Functions: Provide a shorter syntax and do not have their own this value.
  Pure Functions: Functions without side effects, always producing the same output for the same input, are preferred for maintainable code.

Sources:
  MDN Web Docs: JavaScript Functions
  W3Schools: JavaScript Functions

-----------------------------------------------------------------------------------------------


Example Code:

    Create a separate file named functions_example.js to run the example code provided in this tutorial.
    // functions_example.js
    
    // Function to multiply two numbers
    function multiply(a, b) {
        return a * b;
    }
    
    let a = 9;
    let b = 2;
    let result = multiply(a, b);
    
    console.log("Result: ", result); // Should log 18
    
    // Recursive function to calculate factorial
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
    
    // Function to split a string into two halves
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
    
    // Function to test pass-by-reference
    function isPassByReference() {
        let obj = { value: 10 };

    function modify(obj) {
        obj.value = 20;
    }

    modify(obj);

    return obj.value === 20; // Returns true if pass-by-reference, false if pass-by-value
    }
    
    console.log(isPassByReference()); // Output: true

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Topic 3: Control Statements in JavaScript [PLP 4]

One-condition if/else statement

    let x = true;
    if (x) {
        console.log("x is true");
    } else {
        console.log("x is false");
    }
    
Multi-condition if/else statement

    let x = 5;
    let y = 8;
    if (x > 0 && y < 10) {
        console.log("x is positive and y is less than 10");
    } else {
        console.log("Either x is not positive or y is not less than 10");
    }

if/elif/else statements

    let number = 10;
    if (number < 0) {
        console.log("The number is negative");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }

Short-circuit logic

    let a = false;
    let b = true;
    if (a || b) {
        console.log("Short-circuit evaluation: b is evaluated because a is false");
    }
    
    let c = true;
    if (c && b) {
        console.log("Short-circuit evaluation: b is evaluated because c is true");
    }

Switch-case statement

    let fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("You selected apple");
            break;
        case "banana":
            console.log("You selected banana");
            break;
        case "cherry":
            console.log("You selected cherry");
            break;
        default:
            console.log("Unknown fruit");
    }

What are the boolean values in JavaScript?
  In JavaScript, the boolean values are true and false.


What types of conditional statements are available in JavaScript?
- JavaScript supports the following types of conditional statements:
  - if/else
  - if/else if/else
  - switch
    
JavaScript does not have an unless statement like Perl, but the same logic can be achieved using if statements with negation.


How does JavaScript delimit code blocks under each condition in selection control statements?
- JavaScript uses curly braces {} to delimit code blocks under each condition in selection control statements.

       if (condition) {
          // code block
      } else {
          // code block
      }

Does JavaScript use short-circuit evaluation?
- Yes, JavaScript uses short-circuit evaluation. Here’s an example:

      let x = false;
      let y = true;
      
      // Using OR operator
      if (x || y) {
          console.log("Short-circuit: y is evaluated because x is false");
      }
      
      // Using AND operator
      if (y && x) {
          // This code will not run because y is true but x is false
      }

How does JavaScript deal with the “dangling else” problem?

JavaScript uses a pair of curly braces to define the scope of the if and else statements. This avoids ambiguity and resolves the dangling else problem.

     if (condition1) {
        if (condition2) {
            // code block for condition2
        }
    } else {
        // code block for condition1's else
    }

If your language supports switch or case statements, do you have to use “break” to get out of them? Can you use “continue” to have all of the conditions evaluated?
  In JavaScript, you must use break to exit a case in a switch statement to prevent "fall-through" to subsequent cases. JavaScript does not support continue in switch statements, but you can omit the break statement to let the execution continue to the next case.

     let fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("You selected apple");
            // no break statement here, fall-through will occur
        case "banana":
            console.log("You selected banana");
            break;
        case "cherry":
            console.log("You selected cherry");
            break;
        default:
            console.log("Unknown fruit");
    }
-----------------------------------------------------------------------------------------------

Example JavaScript File (control-statements.js)

    // One-condition if/else statement
    let x = true;
    if (x) {
        console.log("x is true");
    } else {
        console.log("x is false");
    }
    
    // Multi-condition if/else statement
    let x = 5;
    let y = 8;
    if (x > 0 && y < 10) {
        console.log("x is positive and y is less than 10");
    } else {
        console.log("Either x is not positive or y is not less than 10");
    }
    
    // if/elif/else statements
    let number = 10;
    if (number < 0) {
        console.log("The number is negative");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
    
    // Short-circuit logic
    let a = false;
    let b = true;
    if (a || b) {
        console.log("Short-circuit evaluation: b is evaluated because a is false");
    }
    
    let c = true;
    if (c && b) {
        console.log("Short-circuit evaluation: b is evaluated because c is true");
    }
    
    // Switch-case statement
    let fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("You selected apple");
            break;
        case "banana":
            console.log("You selected banana");
            break;
        case "cherry":
            console.log("You selected cherry");
            break;
        default:
            console.log("Unknown fruit");
    }


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Topic 4: Classes and Inheritance in JavaScript [PLP 5]

Implementation

Create a simple object (Person)

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

Give the object class attributes (instance variables)
- The Person class above has two instance variables: name and age, which are set in the constructor.

Give the object functions
- The Person class has one function: greet(), which logs a greeting message to the console.

Create an object that inherits from the first object (Student)

    class Student extends Person {
        constructor(name, age, studentId) {
            super(name, age);
            this.studentId = studentId;
        }
    
        study() {
            console.log(`${this.name} is studying. Student ID: ${this.studentId}`);
        }
    }

Test how to instantiate both types of objects, call their functions, and modify their variables
-----------------------------------------------------------------------------------------------
Code:

    // Instantiate a Person object
    let person = new Person('Kaitlyn', 22);
    person.greet(); // Output: Hello, my name is Kaitlyn and I am 22 years old.
    
    // Instantiate a Student object
    let student = new Student('David', 23, 'S12345');
    student.greet(); // Output: Hello, my name is David and I am 23 years old.
    student.study(); // Output: David is studying. Student ID: S12345
    
    // Modify their variables
    student.name = 'Tatiana';
    student.greet(); // Output: Hello, my name is Tatiana and I am 22 years old.
-----------------------------------------------------------------------------------------------
Q&A

Does Javascript support objects or something similar?
  Yes, JavaScript supports objects and classes. JavaScript objects are collections of key-value pairs, and classes provide a blueprint for creating objects with predefined properties and methods.


Are there naming conventions for objects, instance variables, or functions that people writing in Javascript should know?
 In JavaScript, the common naming conventions are:
    Classes: PascalCase (e.g., Person, Student)
    Instance variables and functions: camelCase (e.g., name, age, greet(), studentId)

Does your language have standard methods for functions that serve a similar purpose across all objects?
  Yes, JavaScript has standard methods such as toString() which can be overridden to provide a string representation of an object. For example:

     class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        toString() {
            return `${this.name}, ${this.age} years old`;
        }
    }

    let person = new Person('Alice', 30);
    console.log(person.toString()); // Output: Alice, 30 years old
    
How does inheritance work? Does your language support multiple inheritance?
  Inheritance in JavaScript is achieved using the extends keyword. A subclass inherits properties and methods from a superclass. JavaScript does not support multiple inheritance directly; however, it can be simulated using mixins or composition.


If there is inheritance, how does your language deal with overloading method names and resolving those calls?
  JavaScript supports method overriding, where a subclass can provide a specific implementation for a method already defined in its superclass. The super keyword is used to call the superclass's method.

     class Person {
        greet() {
            console.log('Hello from Person');
        }
    }
    
    class Student extends Person {
        greet() {
            console.log('Hello from Student');
        }
    }
    
    let student = new Student();
    student.greet(); // Output: Hello from Student

Is there anything else that’s important to know about objects and inheritance in your language?
  Prototype-based Inheritance: JavaScript is prototype-based, meaning objects can inherit directly from other objects.

-----------------------------------------------------------------------------------------------

Example JavaScript File (classes-inheritance.js)

    // Define a Person class
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    toString() {
        return `${this.name}, ${this.age} years old`;
    }
}

    // Define a Student class that inherits from Person
    class Student extends Person {
        constructor(name, age, studentId) {
            super(name, age);
            this.studentId = studentId;
        }

    study() {
        console.log(`${this.name} is studying. Student ID: ${this.studentId}`);
    }

    greet() {
        super.greet();
        console.log(`I am also a student with ID: ${this.studentId}`);
    }
}

    // Instantiate a Person object
    
    let person = new Person('Alice', 30);
    person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
    console.log(person.toString()); // Output: Alice, 30 years old
    
    // Instantiate a Student object
    let student = new Student('Bob', 20, 'S12345');
    student.greet(); // Output: Hello, my name is Bob and I am 20 years old. I am also a student with ID: S12345
    student.study(); // Output: Bob is studying. Student ID: S12345
    
    // Modify their variables
    
    student.name = 'Charlie';
    
    student.greet(); // Output: Hello, my name is Charlie and I am 20 years old. I am also a student with ID: S12345


-----------------------------------------------------------------------------------------------




