const user1 = {
    firstName: "Vaibhav",
    age: 23,
    about: function(){
        console.log(`${this.firstName} and ${this.age}`);
    }
}

const user2 ={
    firstName: "ajay",
    age: 22,
}

// console.log(user1);

user1.about.call(user2);