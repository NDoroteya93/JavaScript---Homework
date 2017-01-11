'use strict';

let arr = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];

function frequentNumber(arr) {
    let N = +arr.shift();
    let array = arr.map(Number);
    let sortArr = array.sort((a, b) => a - b);
    let number = '';
    let count = 1;
    let lastCount = 0;
    for (let i = 0; i < N - 1; i += 1) {
        if (sortArr[i] === sortArr[i + 1]) {
            count += 1;
            if (lastCount < count) {
                lastCount = count;
                number = sortArr[i];
            }
        } else {
            count = 1;
        }
    }
    console.log(`${number} (${lastCount} times)`);
}

frequentNumber(arr);
