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
var myName = "";
if (myName) {
    console.log("This is a truthy value");
} else {
    console.log("It's a falsy value"); // Output: It's a falsy value
}

// =========================
// 7. parseInt - Converting Strings to Integers
// =========================
// `parseInt()` extracts an integer from a string.
const myString = "42";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42

const myString3 = "42.5";
const myNumber4 = parseInt(myString3);
console.log(myNumber4); // Output: 42 (Decimals are removed)

// =========================
// 8. parseFloat - Converting Strings to Floats
// =========================
// `parseFloat()` extracts a floating-point number from a string.
const myString1 = "42.5";
const myNumber1 = parseFloat(myString1);
console.log(myNumber1); // Output: 42.5

// =========================
// =========================
// 9. Examples of parseInt Usage
// =========================

// Q1: What happens when we pass a valid number string to parseInt()?
console.log(parseInt("123")); // Output: 123
// Explanation: Since "123" is a valid number, parseInt() converts it directly to an integer.

// Q2: What if we specify a base (radix) explicitly?
console.log(parseInt("123", 10)); // Output: 123
// Explanation: The second argument (10) ensures that the number is interpreted in base 10 (decimal system).

// Q3: Does parseInt ignore spaces before and after the number?
console.log(parseInt("  123 ")); // Output: 123
// Explanation: Yes, parseInt() automatically trims whitespace before processing the number.

// Q4: How does parseInt handle numbers with leading zeros?
console.log(parseInt("077")); // Output: 77
// Explanation: In modern JavaScript, leading zeros are ignored, and the number is treated as decimal (base 10).

// Q5: What happens when we pass a decimal number (floating point)?
console.log(parseInt("1.9")); // Output: 1
// Explanation: parseInt() stops reading at the decimal point and only considers the integer part.

// Q6: What if the string starts with a non-numeric character?
console.log(parseInt("&123")); // Output: NaN
// Explanation: Since "&" is not a number, parseInt() returns NaN (Not-a-Number).

// Q7: Can parseInt handle negative numbers?
console.log(parseInt("-123")); // Output: -123
// Explanation: Yes, parseInt() correctly recognizes the negative sign and parses it as a negative integer.

// Q8: What happens when the input is not a number at all?
console.log(parseInt("xyz")); // Output: NaN
console.log(parseInt("@#$%")); // Output: NaN
// Explanation: Since "xyz" and "@#$%" do not start with a numeric character, parseInt() returns NaN.

// Q9: Can parseInt parse a number mixed with letters?
console.log(parseInt("123abc")); // Output: 123
// Explanation: parseInt() stops reading when it encounters a non-numeric character (in this case, "abc").

// Q10: What happens when we pass an empty string?
console.log(parseInt("")); // Output: NaN
// Explanation: An empty string does not contain any numbers, so parseInt() returns NaN.

// Q11: What if the input starts with spaces and then a number?
console.log(parseInt("   456")); // Output: 456
// Explanation: parseInt() ignores leading spaces and parses the first valid number.

// Q12: How does parseInt handle hexadecimal numbers?
console.log(parseInt("0x1A")); // Output: 26
// Explanation: If the string starts with "0x", parseInt assumes it is a hexadecimal number (base 16).

// Q13: What happens if we pass a binary number as a string?
console.log(parseInt("1010", 2)); // Output: 10
// Explanation: By providing radix 2, parseInt treats "1010" as a binary number (2^3 + 2^1 = 10).

// Q14: How does parseInt handle octal numbers (base 8)?
console.log(parseInt("077", 8)); // Output: 63
// Explanation: With radix 8, "077" is treated as an octal number (7 × 8^1 + 7 × 8^0 = 63).

// Q15: What happens if we provide a large number?
console.log(parseInt("98765432109876543210")); // Output: 98765432109876540000
// Explanation: JavaScript uses 64-bit floating-point numbers, so precision may be lost for very large numbers.

// =========================
// 10. Why is NaN Not Equal to NaN?
// =========================
// NaN (Not-a-Number) is a special value in JavaScript that does not equal itself.
if (NaN === NaN) {
    console.log("Both are equal");
} else {
    console.log("Not equal"); // Output: Not equal
}
