// Function which find the nth fabonacci number using Recursion

function fabonacciUsingRecursion(n) {

    // We know that the fabonacci for negative, one, and for two equal one so that's way we direct return 1 if the 'n === 1' , 'n === 2', and 'n < 0'

    if(n === 1 || n === 2 || n < 0) return 1;

    // We know that the 0 fabonacci is equal to 0 so, if the 'n === 0' then we direct return 0

    else if(n === 0) return 0;

    // Recursion is occur if and only if when the n > 2

    else return (fabonacciUsingRecursion(n - 1) + fabonacciUsingRecursion(n -2));
}

let n = 8;

let result = fabonacciUsingRecursion(n);

console.log(`${n}th Fabonacci Number is ${result}`);

