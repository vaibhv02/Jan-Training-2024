function about(hobby, favsinger) {
    console.log(`${this.firstName}, ${this.age},${hobby},${favsinger}`);
    
}

const obj1 ={
    firstName: "aman",
    age: 22,
}
const obj2 ={
    firstName: "Tamana",
    age: 23,
}

about.call(obj1, "yoga", "honey singh");


about.apply(obj2,["music", "shakira"]);