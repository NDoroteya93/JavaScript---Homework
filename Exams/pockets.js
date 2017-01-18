'use strict';

let arr = [
    "53 20 1 30 2 40 3 3 10 1"
]

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let result;
    let sum = 0;
    let peaks = [];
    for (let i = 1; i < heights.length - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaks.push(i);
        }
    }

    for (let i = 0; i < peaks.length - 1; i += 1) {
        if ((peaks[i] + 2) === peaks[i + 1]) {
            let index = peaks[i] + 1;
            sum += heights[index]
        }
    }
    result = sum;

    console.log(result);
}


solve(arr);