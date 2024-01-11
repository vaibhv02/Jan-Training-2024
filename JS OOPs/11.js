//method overriding

class parent{
    fun(){
        console.log("Hello");
    }
}

class child extends parent {
    fun() {
        console.log("OK");
    }
}

const obj1 = new child();
obj1.fun();