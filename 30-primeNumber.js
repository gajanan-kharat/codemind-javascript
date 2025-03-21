


function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }   
    }
    return true;
}
var result = isPrime(7);
console.log(`Is 7 prime number: ${result}`);

var result = isPrime(15);
console.log(`Is 15 prime number: ${result}`);

const array = [6, 7, 5, 9, 11];
let primeCount = 0;
for (const element of array) {
    if(isPrime(element)){
        primeCount++;
    }
}
console.log(primeCount);
