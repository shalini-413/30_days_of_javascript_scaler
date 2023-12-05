function throttle(func, interval) {
    let lastInvocationTime = 0;
    return function(...args) {
      const currentTime = Date.now();
      if (currentTime - lastInvocationTime >= interval) {
        func(...args);
        lastInvocationTime = currentTime;
      } else {
        console.log(`Throttled: ${func.name}`);
      }
    };
  }
  function greet(name) {  // Function to be throttled with parameters
    console.log(`Hello, ${name}!`);
  }
  const throttledGreet = throttle(greet, 3000);  // Throttle the function with a 3-second interval.
  for (let i = 0; i < 5; i++) {  // Test the throttled function
    throttledGreet("Shalini");
    setTimeout(() => {}, 2000);  // Simulate time passing (2 seconds)
  }
  