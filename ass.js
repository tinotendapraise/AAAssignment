//Number 1: Declaring variables
let firstName = "Praise";
let lastName = "Vhumbunu";
let country = "Zimbabwe";
let city = "Harare";
let age = 27;
let isMarried = true;
let year = 2025;

console.log("Firstname is a ", typeof firstName);
console.log("Lastname is a ", typeof lastName);
console.log("country is a ", typeof country);
console.log("city is a ", typeof city);
console.log("age is a ", typeof age);
console.log("isMarried is a ", typeof isMarried);
console.log("year is a ", typeof year);

//Number2: comparing types
console.log(typeof 10 === typeof "10");
//Number2: comparing types
console.log(parseInt("9.8") === 10);

//Number 4i: Truthy values
if (1) {
  console.log("This is a truthy value");
} //1 is a truthy valu
if (" ") {
  console.log("This a is truthy value");
} //non empty string is a truthy value
if ([]) {
  console.log("this is a truthy value"); // arrays are trutthy values
}

//Number 4ii: falsey Values
if (0) {
  console.log("This is a falsey value "); //this will not print on the console hence a falsey value
} else {
  console.log("0 is falsey");
}

if (null) {
  console.log("This is a falsey value"); //this will not print on the console hence a falsey value
} else {
  console.log("null is falsey");
}

if ("") {
  console.log("This is a falsey value"); //this will not print on the console hence a falsey value
} else {
  console.log("Empty space is falsey");
}
//Number5: And /Or operators
console.log("The expression 4>3 && 10<12 is", 4 > 3 && 10 < 12);
console.log("The expression 4>3&& 10>12 is", 4 > 3 && 10 > 12);
console.log("The expression 4>3||10<12 is", 4 > 3 || 10 < 12);
console.log("The expression 4>3||10>12 is", 4 > 3 || 10 > 12);
console.log("The expression !(4>3) is", !(4 > 3));
console.log("The expression!(4<3) is ", !(4 < 3));
console.log("The expression !(false)", !false);
console.log("The expression !(4>3 &&10<12) is", !(4 > 3 && 10 < 12));

console.log("The expression !(4>3 &&10>12) is", !(4 > 3 && 10 > 12));
console.log("The expression !(4==='4') is", !(4 === "4"));

//Number 6: Area of a triangle
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5 * base * height;
console.log("The area is", area);

//Number 7: Age Validation when driving
let birthYear = prompt("What is your birth year?");
let currentYear = new Date().getFullYear(); //code to get the current year
let userAge = currentYear - birthYear;
let descrepency = 18 - userAge;

if (userAge >= 18) {
  alert(`You are ${userAge}. You are old enough to drive`);
} else {
  alert(`You are ${userAge}, you will be allowed to drive in ${descrepency}`);
}

//Number 7-18: Data Manipulation
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice("days"));
console.log(challenge.slice("Days of JavaScript"));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let stringVar =
  "You cannot end a sentence wit because because because is a conjunction";
console.log(stringVar.indexOf("because"));

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));

//Number 19: random number between 0 and 100 inclusively
const randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

//Number 20 using if else and ternary operator
let a = 7;
let b = 6;

//using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// using tenary operator
let isgreaterthan = true;
isgreaterthan
  ? console.log("a is greater than b")
  : console.log("a is less than b");

//Number 21: Student Grading
let scores = 35;
let grade;

if (scores >= 80 && scores <= 100) {
  grade = "A";
} else if (scores >= 70 && scores <= 89) {
  grade = "B";
} else if (scores >= 60 && scores <= 69) {
  grade = "C";
} else if (scores >= 50 && scores <= 59) {
  grade = "D";
} else if (scores >= 0 && scores <= 49) {
  grade = "F";
} else {
  grade = "invalid";
}
console.log("Grade:", grade);
