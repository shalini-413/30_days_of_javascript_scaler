function reversedNum(num) {
    return (
      parseFloat( // Convert the reversed string back to a number
        num // The input number
          .toString() // Convert the number to a string
          .split('') // Split the string into an array of characters
          .reverse() // Reverse the array
          .join('') // Join the reversed array back into a string
      ) * Math.sign(num) // Multiply the result by the sign of the input number
    );
  }
  
  // Example usage:
  const input = 32243; // Input number
  const reversed = reversedNum(input); // Call the function with the input
  console.log(reversed);          // Output the reversed number
  

  