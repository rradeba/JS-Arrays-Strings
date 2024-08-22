// Exploring Array Manipulation in JavaScript

// Task 1
let fruits = ['apple', 'banana', 'orange'];
let newFruit = "pear"; 
fruits.push(newFruit);
let poppedFruit = fruits.pop();

// Task 2 
let numbers = [3, 1, 5, 2, 4]; 


let sortedArray = numbers.sort(function(a, b) { 
    return a - b; 
}); 

// Task 3
let numbers3 = [3, 1, 5, 2, 4];

const doubledNumbers = numbers3.map(function(num) {
    return num * 2;
});
  
const filteredNumbers = numbers3.filter(function(num) {
    return (num % 2 === 0);  
});
  
const sum = numbers3.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

// Exploring String Manipulation in JavaScript

// Task 1
let message = "Hello, World!";
let messageLength = message.length; 

// Task 2
let text = "Hello, W orld!";
let upper = text.toUpperCase();
let lower = text.toLowerCase();

// Task 3
let sentence3 = "The quick brown fox jumps over the lazy dog";
let subString = sentence3.substring(0, 9); 
// Task 4
let sentence4 = "The quick brown fox";
let splitSentence = sentence4.split(" ");
console.log(splitSentence);
