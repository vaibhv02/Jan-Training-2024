//for loop

// for (let i = 0; i <= 10; i++) 
// {
//     console.log(i);
    
// }

// console.log("table");
// let num = 23;
// for (let j = 1; j <= 10; j++) {
//     console.log(`${num} * ${j} = ${num*j}` );
    
// }

//prime number 


// for (let i = 2; i <= 100; i++) {
//     let Prime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             Prime = false;
//             break;
//         }
//     }

//     if (Prime) {
//         console.log(i);
//     }
// }

// 

// let c=0
// let i,j 

// for(j=2;j<=100;j++)
//     {
//         for( i=1;i<=j;i++)
//             {
//                 if(j%i==0)
//                 c++
//             }
//         if(c==2)
//         console.log(j)
//         c=0
//     }




//reverse of a number

let number = 15389;
let c=0;
let result = 0;

while(number>0){
    rightmost = number%10;
    
    result = result*10 + rightmost;
    number = Math.floor(number/10);
    c++;
}
console.log(result)
console.log(c);
