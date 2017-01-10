'use strict';

let arr = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];

function maximalSequance(arr) {
    let N = +arr.shift();
    let array = arr.map(Number);
    let count = 1;
    let result = 0;
    for (let i = 0; i < N; i += 1)
        if (array[i] === array[i + 1]) {
            count += 1;
            if (count > result) {
                result = count;
            }
        } else {
            count = 1;
        }
    console.log(result);
}

maximalSequance(arr)