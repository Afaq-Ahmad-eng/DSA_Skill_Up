function decToBinConverstion(n){
    let binary = [];
    while(n > 0){
        let bit = n % 2;
        binary.push(String(bit));
        console.log(`n = ${n}, n > 0 = ${n > 0}, '0' + 1 = ${String(bit)}, Binary = ${binary}, n / 2 = ${Math.floor(n / 2)}`);
        n = Math.floor(n / 2);
    }
    binary.reverse();
    return binary.join("");
}
let n = 12;
console.log(`After Binary Conversation is completed binary of ${n} = ${decToBinConverstion(n)}`);
