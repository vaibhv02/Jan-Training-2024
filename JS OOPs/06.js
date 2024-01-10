//creating object



function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function () {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`

    },
    user.is18= function () {
        return this.age >= 18;
    }
    return user;
}


//now let send data to function and get our object
const obj1 = createUser("Vaibhav","Sharma",24,"vaibhavshrma002@gmail.com","mohali")
const obj2 = createUser("Sahil","Thakur",24,"sahil@gmail.com","mohali")
const obj3 = createUser("Shivam","Awasthi",24,"shiva@gmail.com","mohali")
console.log(obj1);
console.log(obj2);
console.log(obj3);

const myData = obj1.about();
console.log(myData);
console.log(obj1.is18());



// const user1 = {
//     firstName: "Vaibhav",
//     lastName: "Sharma",
//     age: 25,
//     email: "vaibhavshrma002@gmail.com",
//     address: "mohali",

// }

// const aboutMe = user1.about();
// console.log(aboutMe);

//for multiple objects, we need a function.
//1. function - create object.
//2. add key-value pairs.
//3. function will return the object.
