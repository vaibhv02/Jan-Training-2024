function reverseCountdown(startingNumber) {
    // Check if the starting number is a valid positive integer
    if (typeof startingNumber !== 'number' || startingNumber < 0 || startingNumber % 1 !== 0) {
      console.log('Please provide a valid positive integer as the starting number.');
      return;
    }
  
    // Perform reverse countdown
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example: Reverse countdown from 5 to 0
  reverseCountdown(5);
  