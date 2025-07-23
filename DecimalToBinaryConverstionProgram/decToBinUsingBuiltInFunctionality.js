// [Approach - 4] Using Built-in Methods - O(log₂(n)) Time and O(log₂(n)) Space
// Description : The main idea is to leverage built-in functions provided by programming languages to directly convert a decimal number to its binary form. These functions abstract away the underlying logic and return the binary representation as a string, making the process quick, concise, and error-free.
function decimalToBinary(n){
    // Use toString(2) to convert the 
    // number to a binary string
    return n.toString(2);
}

let n = 15;
console.log(`Your Number is ${n} and its Binary equalent is ${decimalToBinary(n)}`);
