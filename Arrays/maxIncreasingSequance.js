'use strict';

let arr = ['8', '7', '3', '2', '3', '4', '2', '2', '4'];

function maximalIncreasingSequance(arr) {
    let N = +arr.shift();
    let array = arr.map(Number);
    let count = 1;
    let result = 0;
    for (let i = 0; i < N - 1; i += 1) {
        if (array[i] < array[i + 1]) {
            count += 1;
            if (count > result) {
                result = count;
            }
        } else {
            count = 1;
        }
    }
    return result;
}
