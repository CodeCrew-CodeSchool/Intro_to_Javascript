// Variables
let message = "Hello World";

console.log(message)

message = "Hello 202608 Cohort!"

console.log(message)

var myNumber = 34567;

console.log(myNumber);

myNumber= 67890;

console.log(myNumber);

// Operators

// Arithmetic: + - / *


console.log(message + " Today is Saturday");
let myName = "Dili"
console.log(`Hello, my name is ${myName}, I am 29 years old`);
console.log("Hello, my name is " +  myName + " I am 29 years old");

// Comparison

let x = 5 < 9 || 2 > 3;

let y = 5 !== "5"

// AND --> &&
// OR --> ||
// NOT !

console.log(y)

// DOCUMENT OBJECT MODEL

// document.querySelector("") selects the first element that matches the qeury
let myHeader = document.querySelector("h1")

console.log(myHeader)

myHeader.innerText = "Hello World"
myHeader.style = "color: blue;"

console.log(document.querySelectorAll("p"))

// document.getElementById("") selects the unique element that matches the id input
console.log(document.getElementById("p2"))

// Events

let buttonHTML = document.getElementById("btn")


// The document.getElementById("btn").addEventListener function allws you to use javascript to execute a function when an event occurs

// buttonHTML.addEventListener("click", ()=>{
//     console.log('hello world')
// })


