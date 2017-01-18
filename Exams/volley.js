'use strict';

let arr = [
    "5 1 7 4 8"
]

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let result;
    let sum = 0;
    let temp = 0;
    for (let i = 0; i < heights.length; i += 1) {
        sum += heights[i];
        if (heights[i] === heights[heights.length - 1]) {
            if (temp < sum) {
                temp = sum;
            }
        }
        if (heights[i] > heights[i + 1] && heights[i] > heights[i - 1]) {
            if (temp < sum) {
                temp = sum;
            }

            sum = heights[i];

        }
    }
    result = temp;
    console.log(result);
}
solve(arr);