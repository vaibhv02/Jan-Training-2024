//arrow function

const obj1 = {
    firstName: "aman",
    age: 33,
    about: () => {
        console.log(this);
        console.log(`${this.firstName}, ${this.age}`);
    }
}
obj1.about();