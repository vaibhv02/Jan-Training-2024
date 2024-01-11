//print the number whose digits sun is not prime using array
//if 22 is the number of index 1 then first count its digits sum (2+2) = if not prime then print. 


function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) 
      return false;
    return num > 1;
  }
  
  function digitSum(number) {
    return [...String(number)].reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  
  function NonPrimeDigitSum(arr) {
    arr.forEach((num, index) => {
      const sum = digitSum(num);
      if (!isPrime(sum)) {
        console.log(`Index ${index + 1}: ${num} (Digit Sum: ${sum})`);
      }
    });
  }
  
  const numbersArray = [22, 34, 57, 89, 123, 342];
  NonPrimeDigitSum(numbersArray);
  