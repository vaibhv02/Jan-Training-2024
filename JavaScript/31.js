const obj = {
    name: "Vaibhav",
    age:   "20",
    gen:  "male"
}

const keys = Object.keys(obj)
const key = Object.values(obj)
const kees = Object.entries(obj)
console.log(keys);
console.log(key);
console.log(kees);

const arr = Object.keys(obj)
arr.map((item)=>obj[item])
console.log(arr);

const newObj = {...obj}
console.log(newObj);

newObj.name = "Shiva"
console.log(newObj);
console.log(obj);


const car = {
    car:{vw:"polo"},
    model:2021
}
//deep copy (when original array doesn't chnage while chaging in new obj) and shalow copy(when main object changes at the time of changing in new obj)(in nested object shalow copy is done)
const copy = {...car};
console.log(copy);

copy.car.vw="zeta";
console.log(car);
 
const deepCopyingObj = JSON.parse(JSON.stringify(car));

console.log(deepCopyingObj);
deepCopyingObj.car.vw= "VW"