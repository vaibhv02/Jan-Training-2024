//object in JS
//array is not sufficient for real world data
//syntax : (key value pair)
//there is no indexing in object

let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);

Array.isArray(obj);
Array.isArray(arr);

console.log(Array.isArray(obj));
console.log(Array.isArray(arr));


//how to create object

const person = {
    // (key)   (value)
       name:   'ravinder',
       age:    15,
       gen:    'male',
       hobbies:['music','sleep','cooking']
}

console.log(person);

console.log(person.age);
console.log(person.hobbies);
console.log(person['x hobbies']);

