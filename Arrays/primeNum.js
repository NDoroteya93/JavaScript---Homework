'use strict';
let arr = ['23'];

function primeNum(number) {
    let n = +number[0];
    let i, divider, maxPrime = 2;

    for (i = number; i >= 2; i -= 1) {

        var isPrime = true;
        for (divider = 2; divider * divider <= number; divider += 1) {
            if (i % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            maxPrime = i;
            break;
        }
    }

    return maxPrime | 0;
}

primeNum(arr);
