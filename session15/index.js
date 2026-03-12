/*
1. Discussion Topic List:
Arithmetic Operators
Addition Operator (+)
Subtraction Operator (-)
Multiplication Operator (*)
Division Operator (/)


2. Assignment Operators
Basic Assignment Operator (=)
Addition Assignment Operator (+=)
Subtraction Assignment Operator (-=)
Multiple Operators and Parentheses

3. Increment and Decrement
Increment Operator (++)
Decrement Operator (--)

4. Type Coercion

5.Comparison Operators
Equality Operator (==)
Inequality Operator (!=)
Strict Equality Operator (===)
Strict Inequality Operator (!==)

5.Relational Operators
Greater Than Operator (>)
Greater Than or Equal To Operator (>=)
Less Than Operator (<)
Less Than or Equal To Operator (<=)

6.Logical Operators
Logical AND Operator (&&)
Logical OR Operator (||)
Logical NOT Operator (!)

*/


// [Section] Arithmetic Operators

let num1 = 10;
let num2 = 2;
let num3 = 3;

let sum = num1 + num2; // Addition

console.log("Sum: " + sum); // Output: Sum: 12

let diff = num1 - num2; // Subtraction
console.log("DIFFERENCE: " + diff); 


let PROD = num1 * num2; // Multiplication
console.log("PRODUCT: " + PROD); 


let quo = num1 / num2; // Division
console.log("QUOTIENT: " + quo); 

let mod = num1 % num3; // Modulus
console.log("MODULO: " + mod); // Output: MODULO: 1


// [Section] Assignment Operators

let num4 = 20;
let num5 = 8;

//let sum = num4 + num4; // Basic Assignment

// num4 = 20;

num4+=num4; // Addition Assignment
console.log("ASSIGNMENT OPERATOR: += " + num4); // Output: ASSIGNMENT OPERATOR: 40


num4+=num5; // Addition Assignment
console.log("ASSIGNMENT OPERATOR: += " + num4); // Output: ASSIGNMENT OPERATOR: 28

//[SECTION] Incrementation and Decrementation
// Inc (++), Dec (--) | let age = 10; age++;

//Pre
let days2 = 5;
console.log("ORIGINAL VALUE " + days2); // Output: Pre-Increment: 6

++days2;
console.log("PRE-INCREMENT1: " + days2); // Output: Pre-Increment: 6

++days2;
console.log("PRE-INCREMENT2: " + days2); // Output: Pre-Increment: 6

//Post
let months2 = 4;
console.log("ORIGINAL VALUE " + months2); // Output: Post-Increment: 3

months2--;
console.log("POST-DECREMENT1: " + months2); // Output: Post-Decrement: 3

months2--;
console.log("POST-DECREMENT2: " + months2); // Output: Post-Decrement: 3


//[SECTION] COMPARISON OPERATORS

let num6 = 10;
let num7 = 12;
let num8 = "10";



// Equality Operator (==)

let eqality = num6 == num7; 
console.log("Equality operator: " + eqality); // Output: EQUALITY: false

let eqality2 = num6 == num8; 
console.log("Equality operator: " + eqality2); // Output: EQUALITY: true


// Strict Equality (===)
let sequality1 = num6 === num7;
console.log("Strict Equality operator: " + sequality1); // Output: STRICT EQUALITY: false

let sequality2 = num6 === num8; 
console.log("Strict Equality operator: " + sequality2); // Output: STRICT EQUALITY: false


//Not Equal (!=)
let notEqual1 = num6 != num7;
console.log("NOT EQUAL: " + notEqual1); // Output: NOT EQUAL: true

let notEqual2 = num6 != num8;
console.log("NOT EQUAL: " + notEqual2); // Output: NOT EQUAL: false


//Stricltt Not Equal (!==)

let snotEqual1 = num6 !== num7;
console.log("S-NOT EQUAL: " + snotEqual1); // Output: NOT EQUAL: true

let snotEqual2 = num6 !== num8;
console.log("s-NOT EQUAL: " + snotEqual2); // Output: NOT EQUAL: false


// [SECTION] Relational Operators

let num9 = 25;
let num10 = 15;

console.log("GT: ", num9 > num10); // Output: Greater Than: true

console.log("LT: ", num9 < num10); // Output: Less Than: false

console.log("GTE: ", num9 >= num10); // Output: Greater Than or Equal To: true

console.log("LTE: ", num9 <= num10); // Output: Less Than or Equal To: false


// [SECTION] Logical Operators
let isLegalAge = true, isMarried = false, isVoter = true;

// Logical AND (&&)
console.log("LOGICAL AND: ", isLegalAge && isMarried && isVoter); // Output: Logical AND: false

// Logical OR (||)
console.log("LOGICAL OR: ", isLegalAge || isMarried || isVoter); // Output: Logical OR: true

// Logical NOT (!)
console.log("LOGICAL NOT: ", !isMarried); // Output: Logical NOT: false

// [SECTION] large scale data types


// Arrays
// can store multiple elements/values
// Values should of the same data type

let array = [10, 20, 30,];
let names = ["Anna", "Jane", "George"];

console.log(names);

let mixedArr = ["Anna", 3,  true,];
console.log(mixedArr);

// objects
// it consits a key /propety and a paired value
let user = {
    name: "John",
    gradeLevel: 3,
    isEnrolled: true
}

console.log(user);

// [SECTION] Alert vs Prompt

alert ("Watzzup M*therFVckerz");

console.log("Hello");

let completeName = prompt("Please enter your complete name: ");
console.log("Putang Inamo, " + completeName);

let input1 = parseInt(prompt("Enter num1. "));
let input2 = parseInt(prompt("Enter num2. "));

let sum3 = input1 + input2;
console.log("SUM FROM PROMPT: " + sum3);

// Mini-activity1
// 