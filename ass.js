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

console.log(typeof 10 === typeof "10");
console.log(parseInt("9.8") === 10);

if (1) {
  console.log("This is a truthy valu");
} //1 is a truthy valu
if (" ") {
  console.log("This a is truthy value");
} //non empty string is a truthy value
if ([]) {
  console.log("this is a truthy value"); // arrays are trutthy values
}

if (0) {
  console.log("This is a falsey value ");
}
if (null) {
  console.log("This is a falsey value");
}
if ("") {
  console.log("This is a falsey value");
}
