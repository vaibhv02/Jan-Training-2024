// to create an array using const keyword

//const pi = 3.14
//pi = 17;
//console.log();


const fruits = ['mango', 'apple'];
fruits.push('orange');
console.log(fruits);

fruits.pop();
console.log(fruits);


//for of loop

for (let i of fruits) 
{
    console.log(i);
    
}


//for in loop

for (let i in fruits) 
{ 
    console.log(fruits[i],i);
}

