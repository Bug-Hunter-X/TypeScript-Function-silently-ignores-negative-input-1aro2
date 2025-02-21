function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error('Input must be a positive integer.');
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

//Example usage:
printNumbers(5); //Prints 1 to 5
try {
  printNumbers(-5);
} catch (error) {
  console.error(error.message); //Prints 'Input must be a positive integer.'
}
