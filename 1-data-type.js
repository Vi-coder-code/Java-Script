// =========================
// 1. Variable Redeclaration and Reassignment
// =========================
// JavaScript allows variables declared with `var` to be redeclared and reassigned.
var myName = 1;
console.log(myName); // Output: 1

var myName = "John";
console.log(myName); // Output: John

var myName = "Vishal";
console.log(myName); // Output: Vishal
console.log(typeof myName); // Output: string

var myName = 1;
console.log(myName); // Output: 1
console.log(typeof myName); // Output: number

// =========================
// 2. `typeof null` in JavaScript
// =========================
// `null` is a special value in JavaScript that represents an empty or unknown value.
// However, due to a historical JavaScript bug, `typeof null` returns "object".
var badMemories = null;
console.log(badMemories); // Output: null
console.log(typeof null); // Output: "object" (JavaScript quirk)

// =========================
// 3. Primitive Data Types in JavaScript
// =========================
// JavaScript has 7 primitive data types: string, number, boolean, null, undefined, symbol, and bigint.
var myNumber = 1;
console.log(myNumber); // Output: 1
console.log(typeof myNumber); // Output: number

// =========================
// 4. Converting a String to a Number
// =========================
// You can use `Number()`, `parseInt()`, or `parseFloat()` to convert a string into a number.
var myFavNum = "10";
console.log(typeof myFavNum); // Output: string
console.log(typeof Number(myFavNum)); // Output: number

// =========================
// 5. Converting a Number to a String
// =========================
// You can convert a number into a string using `String()` or concatenation (`+ ""`).
let str = 5;
console.log(typeof String(str)); // Output: string
console.log(typeof (str + "")); // Output: string

// =========================
// 6. Truthy and Falsy Values in JavaScript
// =========================
// In JavaScript, values that evaluate to `false` in a boolean context are called "falsy":
// Falsy values: false, 0, "", null, undefined, NaN
// All other values are "truthy".
var myNameCheck = "";
if (myNameCheck) {
    console.log("This is a truthy value");
} else {
    console.log("It's a falsy value"); // Output: It's a falsy value
}

// =========================
// 7. parseInt - Converting Strings to Integers
// =========================
// `parseInt()` extracts an integer from a string.
{
    const myString = "42";
    let myParsedNumber = parseInt(myString);  // Renamed to avoid conflict
    console.log(myParsedNumber);
}

{
    const myString3 = "42.5";
    let myParsedNumber2 = parseInt(myString3);  // Renamed to avoid conflict
    console.log(myParsedNumber2);
}

// =========================
// 8. parseFloat - Converting Strings to Floats
// =========================
// `parseFloat()` extracts a floating-point number from a string.
{
    const myString1 = "42.5";
    const myFloatNumber = parseFloat(myString1);
    console.log(myFloatNumber); // Output: 42.5
}

// =========================
// 9. Examples of parseInt Usage with Questions
// =========================

// Q1: What will be the output of parseInt("123")?
console.log(parseInt("123")); // Output: 123

// Q2: What happens when we specify a radix (base 10)?
console.log(parseInt("123", 10)); // Output: 123

// Q3: Does parseInt ignore leading and trailing spaces?
console.log(parseInt("  123 ")); // Output: 123

// Q4: What happens with leading zeros?
console.log(parseInt("077")); // Output: 77

// Q5: Does parseInt extract only the integer part from a float?
console.log(parseInt("1.9")); // Output: 1

// Q6: What happens when the first character is not a number?
console.log(parseInt("&123")); // Output: NaN

// Q7: What happens with negative numbers?
console.log(parseInt("-123")); // Output: -123

// Q8: What if the input is completely non-numeric?
console.log(parseInt("xyz")); // Output: NaN

// Q9: Can parseInt handle special characters?
console.log(parseInt("@#$%")); // Output: NaN

// Q10: Does parseInt stop parsing when it encounters non-numeric characters?
console.log(parseInt("123abc")); // Output: 123

// Q11: What if the input is an empty string?
console.log(parseInt("")); // Output: NaN

// Q12: What happens with spaces before a number?
console.log(parseInt("   456")); // Output: 456

// Q13: Can parseInt handle hexadecimal numbers?
console.log(parseInt("0x1A")); // Output: 26

// Q14: Can parseInt handle binary numbers (base 2)?
console.log(parseInt("1010", 2)); // Output: 10

// Q15: Can parseInt handle octal numbers (base 8)?
console.log(parseInt("077", 8)); // Output: 63

// Q16: What happens with very large numbers?
console.log(parseInt("98765432109876543210")); // Output: 98765432109876540000

// =========================
// 10. Why is NaN Not Equal to NaN?
// =========================
// NaN (Not-a-Number) is a special value in JavaScript that does not equal itself.
if (NaN === NaN) {
    console.log("Both are equal");
} else {
    console.log("Not equal"); // Output: Not equal
}

// =========================
// 11. Checking for NaN Correctly
// =========================
// Use `isNaN()` or `Number.isNaN()` to check for NaN.
console.log(isNaN(NaN)); // Output: true
console.log(Number.isNaN(NaN)); // Output: true

// =========================
// 12. Extra: Converting Boolean to Number and String
// =========================
console.log(Number(true));  // Output: 1
console.log(Number(false)); // Output: 0
console.log(String(true));  // Output: "true"
console.log(String(false)); // Output: "false"
