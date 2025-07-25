//  Function which find the nth fabonacci number using loop

function fabonacciUsingLoop(n) {


    // we declare two variables previous # 1, and  previous # 2 to store the two previous values as we know that the fabonacci using the previous values to find next fabonacci number, and also we declare the current variable which we use to store current fabonacci number 
     let prev1 = 1, prev2 = 1, current = 1;

    // We know that the fabonacci for negative, one, and for two equal one so that's way we direct return 1 if the 'n === 1' , 'n === 2', and 'n < 0'

    if(n < 0 || n === 1 || n === 2) return 1;

    // We know that the 0 fabonacci is equal to 0 so, if the 'n === 0' then we direct return 0

    else if(n == 0) return 0;

    
    // loop start if and only if when the n > 2
    else{
        for(let i = 3; i <= n; i++){
            current = (prev1 + prev2);
            prev2 = prev1;
            prev1 = current;
        }
    }
    
    return current;
    
}

let n = 9;
let result = fabonacciUsingLoop(n);
console.log(`${n}th Fabonacci Number is ${result}`);
