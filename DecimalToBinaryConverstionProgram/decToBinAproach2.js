//[Approach - 2] Using Head Recursion - O(log₂(n)) Time and O(log₂(n)) Space
// Description: The idea is same as the previous approach, but we will use recursion to generate the binary equivalent number.

//Function which is used as a recursion to convert a number to his equalent binary

let i = 1; // this i for count that how many call's stack
function decimalToBinaryConverstionUsingRecursion(n, bin){
    if(n === 0) return;
   
    decimalToBinaryConverstionUsingRecursion(Math.floor(n /2), bin);

    bin.push(n % 2);

    console.log(`Number = ${n}, Call Stack Call's = ${i},  Bit = ${bin}, ${n % 2} + '0' = ${(n % 2) + '0'} Number remain = ${n} / 2 = ${n / 2}`);
     i++;
}

//Function for decimal to binary converstion

function decimalToBinary(n){
    if( n === 0) return "0";
 
    let binary = [];

    decimalToBinaryConverstionUsingRecursion(n, binary);
    return binary.join("");
}
let n = 12;
let reslt = decimalToBinary(n);
console.log(`\nYour Number is ${n} and its Binary is ${reslt}`);
