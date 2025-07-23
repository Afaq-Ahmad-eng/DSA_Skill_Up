// Function for converstion 
function decToBinConverstion(n){
    // Array in which we store the bits
    let binary = [];

    // loop to find a number binary version
    while(n > 0){
        let bit = n % 2;
        binary.push(String(bit));
        console.log(`n = ${n}, n > 0 = ${n > 0}, '0' + 1 = ${String(bit)}, Binary = ${binary}, n / 2 = ${Math.floor(n / 2)}`);
        n = Math.floor(n / 2);
    }
    //Reverse the array to correctly present the bits
    binary.reverse();

    //Return the binary of a number and before the return first the binary array convert to a single string to present correct the bits
    return binary.join("");
}
let n = 12;
console.log(`After Binary Conversation is completed binary of ${n} = ${decToBinConverstion(n)}`);
