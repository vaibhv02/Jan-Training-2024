//methos


const person = {
    firstName: "Vaibhav",
    age: 23,
    about: function () {
        console.log(`My name is ${this.firstName} and I am ${this.age} years old.`);
        console.log(`My name is ${person.firstName} and I am ${person.age} years old.`);
        
    }
}
console.log(person.about());