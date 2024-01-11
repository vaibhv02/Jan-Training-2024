//static keyword
//static variable are called by using their class name.

class abc {
    static firstName = "Vaibhav";
    static age = 23;
    static fun(){
        console.log("This is a function inside the class");
    }
}
const obj1 = new abc();

// obj1.fun(); //not workig - obj1.fun is not a function.
//console.log(obj1.name); //Undefined.

abc.fun(); //Working fine- Output: This is a function inside the class.
console.log(abc.firstName); //working fine, Output - Vaibhav
console.log(abc.age); //Output - 23

//===================================================//


class xyz {
    static LastName = "Sharma";
    static age = 24;
    static fun(a,b){
        return a+b;
    }
    static{
        console.log("Static Block");
    }
}

let lastName = xyz.LastName;
xyz.fun();
console.log(xyz.LastName)
console.log(3,4);

//=============================================//

class pqr extends xyz {
    fun(){
        console.log("ok");
    }
}
const obj2 = new pqr();
obj2.fun() // ok