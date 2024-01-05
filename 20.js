//count

let number = 2345356234;
let c=0;

while(number>0){
    number = Math.floor(number/10);
    c++;
}

console.log(c);