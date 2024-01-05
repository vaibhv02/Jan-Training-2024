// for loops in JS

let fruits = ["mango", "apple", "grapes","orange"];
let newFruits = [];

for (let i = 0; i < fruits.length; i++) 
{
    console.log(fruits[i]);
    newFruits.push(fruits[i]);
}
console.log(newFruits);


// while loop in JS

let fruit = ["mango", "apple", "grapes","orange","banana"];
let newFruit = [];

let j = 0;

while (j < fruit.length) 
{
    newFruit.push(fruit[j]);
    j++;    
}
console.log(newFruit);