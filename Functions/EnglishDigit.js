'use strict';
let arr = ['100'];
function englishDigit(num)
{
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let number = num[0].split('')
    let lastDigit = +number[number.length - 1];
    return words[lastDigit];
}

console.log(englishDigit(arr));