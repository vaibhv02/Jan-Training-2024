
function print() {
    console.log(`My name is ${this.firstName} and my age is ${this.age}`);
    
}

const user1 = {
    firstName: "ravinder",
    age: 22,
    about : print,
}

const user2 = {
    firstName: "raman",
    age: 23,
    about : print,
}

const user3 = {
    firstName: "Vaibhav",
    age: 24,
    about : print,
}

user1.about();
user2.about();
user3.about();

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());

// console.log(this);
//window object
//inbuilt function provided by JS

// console.log(user1);
// console.log(user2);
// console.log(user3);


// function myFunc() {
//     console.log("Hello");
//     console.log(this);
// }
// myFunc(this);


