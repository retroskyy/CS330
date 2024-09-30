/*
Research the naming conventions in your language for variables (i.e., are they case sensitive?)
    ---> For global JavaScript variables, there are no specific naming standards. 
        It is recommended to use camel case for mutable global variables and uppercase for immutable global variables.

do they have to start with lower case letters? Can they start with numbers? Symbols? 
    ---> For variables, the Java naming convention is to always start with a lowercase letter and then capitalize the first letter of every subsequent word.

do programmers use underscores, as in "last_name", or do they use camel case (lastName))?
    ---> Camel Case is the convention. 
*/


/*
Write a piece of code that creates variable of each of these common data types (where possible) and follows the naming conventions:
int,string, floating-point number, boolean, array/list, dictionary (sometimes called a hash or a map, depending on your language)
*/

let myInt = 22;
let myString = "Hello, world!"; // String
let myFloat = 2.09; // Floating-point number
let isBoolean = true; // Boolean
let myArray = [1, 2, 3, 4, 5]; // Array
let myDictionary = { key1: "value1", key2: "value2" };


/* 
Discussion questions:

Does your language have keywords or reserved words? How many?
    ---> Yes, JavaScript has keywords and reserved words. 
        Keywords are tokens that have special meaning in the language and are used to define the structure and behavior of your code.
        Reserved words are a subset of keywords that cannot be used as identifiers (variable names, function names, etc.) in your code.

        Keywords:
        Some keywords are not reserved, meaning they can be used as identifiers in certain contexts. For example, async is a keyword used to define asynchronous functions, but you can still use it as a variable name outside of that context.
        
        Reserved Words:
        These are keywords that are always reserved and cannot be used as identifiers. Examples include if, else, for, function, var, let, and const.

What are the naming requirements for variables in your language? 
    --->
What about naming conventions?  Are those enforced by the compiler/interpreter, or just standards in the community?
    Variable names:
        Use camelCase (first letter lowercase, subsequent letters uppercase).
        Should be descriptive and indicate their content and usage.
    Global variables:
        Use uppercase.
    Constants:
        Use uppercase.
    Function names:
        Use camelCase and descriptive nouns and verbs as prefixes.
    Boolean variables:
        Use prefixes like "is" or "has" to indicate a true or false condition.
    Reserved keywords:
        Variable names cannot be the same as reserved keywords like if or const.
    Special characters:
        Do not use hyphens or underscores in JavaScript names.
        Do not start names with a dollar sign ($).
    Consistency:
        Use the same naming convention for all your code.
    This convention ensures that there aren't multiple variables with the same name, which could lead to confusion and errors.

Is your language statically or dynamically typed?
    ---> Javascript is a dynamically typed language; 
        in dynamically typed languages, all type checks are preformed in runtime, when our program is excecuting.

Strongly typed or weakly typed?
    ---> JavaScript is a weakly typed programming language because you do not have to specify the variable type in advance.

Are some variables mutable while others are immutable? 
    ---> In JavaScript, only objects and arrays are mutable, not primitive values. 
        A mutable object is an object whose state can be modified after it is created. 
        Immutables are the objects whose state cannot be changed once the object is created.

What are the operators available for each data type?
    ---> 
        Arithmetic Operators: +,-,'',*,/,%, ++, --
        Assignment Operators: =, +=, -=, '=', /=, %=
        Comparison Operators: ==, !=, ===, >, <, >=, <=
        String Operators: + - joins two strings togetehr
        Logical Operators: &&, ||,!
        Bitwise Operators.
        Ternary Operators.
        Type Operators.

Are mixed type operations allowed? If so, how are they accommodated?
---> Yes, mixed type operations are allowed in JavaScript since it is dynamically typed language. The type of a variable is determined at runtime, not during declaration. 
    This allows for flexibility but also requires careful handling of different data types. This can be done through "Type Coercion" &/or "Operators and Type coercion". 

At what point are identifier names and operator symbols bound in your language? For example if you declare a (variable, class name, function name), when is it bound to the type, address? When are operators (+,*, etc.) bound to their operations?
Explicitly typed or implicitly typed?
    --->In JavaScript, the binding of identifier names (such as variables, class names, and function names) and operator symbols occurs at different stages.
    Variable Declerations
    --> Bind at runtime during execution.
    Function Declarations
    ---> Bind at pasre time.
    Class Declarations
    ---> Bind at runtime during execution.
*/


/*
CODING EXAMPLE demonstrating the features above

*/

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

/*
EXAMPLE OF (one) ILLUSTRATIVE EXAMPLE:

If you put this line (or something similar) in a program and try to print x, what does it do? 

x = "5" + 6

If it doesn't compile, why?  Is there something you can do to make it compile?

    ---> This line will result in the string "56" due to type coercion. 
    The number 6 is converted to a string and concatenated with "5".
    
    This line of code will compile and run in JavaScript without any issues 
    because JavaScript is dynamically typed and handles type coercion automatically.


 

Describe the limitations (or lack thereof) of your programming language as they relate to the coding example portion of the assignment (adding ints and floats, storing different types in lists, converting between data types).  Are there other restrictions or pitfalls that the documentation mentions that you need to be aware of?
Are there built-in complex data types that are commonly used in your language? (hint: they’d probably appear fairly early in the documentation if so)
    --->    Some limitations are:
        - JavaScript's flexibility with types can lead to unexpected behavior. this flexibility requires careful handling to avoid unexpected behaviors due to implicit type coercion.

*/

/*
Sources:
    *-* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    *-* https://www.w3schools.com/js/default.asp
*/