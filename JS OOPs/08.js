const userMethod = {
    about: function () {
        return `${this.firstName} , ${this.lastName} , ${this.email} , ${this.age} , ${this.address}`;
    },
    is18: function () {
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address) {
    //this seprate both this.firstName=firstName
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    //reference
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}

createUser.prototype.about = function(){
    return `my first name is ${this.firstName} and I am ${this.age} years old.`
}

createUser.prototype.is18 = function () {
    return this.age >= 18;
}

//now let send data to function and get our objects
const obj1 = createUser("Vaibhav", "Sharma", "vaibhavshrma002@gmail.com", 23, "kharar");
console.log(obj1);
console.log(obj1.about());
console.log(obj1.is18())
