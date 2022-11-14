/**
Escribe la función primes tal que que reciba como parámetro un número n y retorne
los n primeros números primos. Por ejemplo, dado n = 6 la función debe funcionar así:
primes(6)
=> [2, 3, 5, 7, 11, 13]
 */

function isPrime(number) {
    let count = 0;
    if(number <= 1 ) return false;

    for (let index = 2; index <= number; index++) {
        if(number != index) {            
            if(number % index == 0) count+=1;
        } 
    }
    response = count == 0 ? true : false;
    return response;
}

function primes(inputNumber) {
    let arrayPrimesNumbers = [],
        i = 2;
    
    while (arrayPrimesNumbers.length < inputNumber) {
        if( isPrime(i) ) arrayPrimesNumbers.push(i);
        i++;
    }

    return arrayPrimesNumbers;
}

console.log(primes(168))