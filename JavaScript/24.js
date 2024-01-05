//cloning an array

let arr1 = ['mohit', 'sumit', 'rohit'];
let arr2 = arr1;

console.log(arr1 === arr2);

//method 1

let brr1 = [1,2,3,4,5,6];
let brr2 = [];

brr2 = brr1.slice(0);
console.log(brr2);
console.log(brr1 === brr2);


//method 2

let crr1 = [1,2,3,4,5,6];
let crr2 = [];

crr2 = [].concat(crr1, ['banana','grapes']);
console.log(crr2);

//method 3 

let drr1 = [1,2,3,4,5,6];
let drr2 = [];

drr2 = [...drr1,'apple','mango'];   //... Spread Operator

console.log(drr2);
console.log(drr1===drr2);