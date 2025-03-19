const readline = require("readline-sync");

function getPrimeFactors(n){
    let factors = [];

    while(n%2 === 0){
        factors.push(2);
        n /= 2;
    }

    for(let i = 3; i * i <= n; i += 2){
        while(n%i === 0){
            factors.push(i);
            n /= i;
        }
    }

    if(n>2){
        factors.push(n);
    }

    return factors;
}

const num = parseInt(readline.question("Enter a number: "), 10);

const primeFactors = getPrimeFactors(num);
console.log("Prime factors of " + num + " are: " + primeFactors.join(", "));