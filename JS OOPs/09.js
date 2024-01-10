//Class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    about() {
        return `Name is ${this.name}`;
    }
    isFast() {
        return this.age >= 2;
    }
    isCute() {
        return true;
    }

}
const obj1 = new Animal("Einstein... Einstein the Dog", 3);
console.log(obj1.about());
console.log(obj1.isFast());
console.log(obj1.isCute());
console.log(obj1.name);

class Dog extends Animal {

}

const d1 = new Dog("Candy", 2);
console.log(d1.about());


