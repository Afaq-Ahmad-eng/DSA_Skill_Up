// [Approach - 3] Using Bitwise Operators - O(log₂(n)) Time and O(log₂(n)) Space
// Description : Using bitwise operators, we can extract binary digits by checking the least significant bit (n & 1) and then right-shifting the number (n >> 1) to process the next bit.
// This method is faster than arithmetic division and modulo, as bitwise operations are more efficient at the hardware level.

function decimalToBinaryConverstionUsingBitwiseOperator(n){
    let binary = [];
    let i = 1;
    while(n > 0){

         // Finding (n % 2) using bitwise AND operator
        // (n & 1) gives the least significant bit (LSB)

        let bit = (n & 1);
        binary.push(String(bit));

         // Right shift n by 1 (equivalent to n = Math.floor(n / 2))
        // This removes the least significant bit (LSB)
        console.log(`Number = ${n}, iteration = ${i}, bit = ${String(binary.join(""))}`);
        
        n = (n >> 1);
    }

    return binary.reverse().join("");
}
let n = 12;
let result = decimalToBinaryConverstionUsingBitwiseOperator(n);
console.log(`\nYour Number is ${n} and the binary equalent for that number is ${result} we Reverse binary that ${n} for correctness`);




