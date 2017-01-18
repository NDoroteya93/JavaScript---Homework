'use strict';

// [0...3] 
// [15...20]
// [5...8]

function solve(args) {
    const S = +args[0];
    let result = 0;
    for (let cars = 0; cars * 4 <= S; cars += 1) {
        for (let trucks = 0; trucks * 10 <= S + cars * 4; trucks += 1) {
            for (let trikes = 0; trikes * 3 + trucks * 10 + cars * 4 <= S; trikes += 1) {
                if (cars * 4 + trucks * 10 + trikes * 3 === S) {
                    result += 1;
                }
            }
        }
    }
    console.log(result);
}
const test1 = ['7'],
    test2 = ['10'],
    test3 = ['40'];

solve(test1);
solve(test2);
solve(test3);