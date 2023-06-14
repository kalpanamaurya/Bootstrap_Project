function printNumbersDivisibleBy3(low, high) {
    for (let i = low; i <= high; i++) {
      console.log(i + (i % 3 === 0 ? " div3" : ""));
    }
  }
  

  printNumbersDivisibleBy3(1, 20);