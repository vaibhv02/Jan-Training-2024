const key = "email";
const obj = {
    name: "raman",
// email: "test123@gmail.com"
    age :  "36",
    weight: "70kg"
}

obj[key] = "test123@gmail.com"
console.log(obj);


//how to iterate object
//for of
//for in

for (let key in obj)
{
    console.log(obj.key);
}


for (let key in obj)
{
    console.log(`${key} : ${obj[key]}`);
}