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
