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

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    dogSpeed() {
        return `The ${this.name} is going at a speed of ${this.speed}.`
    }
}
const d1 = new Dog("nick", 2, 34);
console.log(d1.dogSpeed());

