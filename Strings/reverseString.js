'use strict';

let arr = ['qwertytrewq'];


function reversedString(string)
{
    let str = string[0];
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i -= 1)
    {
        newStr += str[i];
    }
    return newStr;

}


console.log(reversedString(arr));

// Chaining methods

function reverseString(str)
{
    let string = str[0];
    return string.split('').reverse().join('');
}

console.log(reverseString(arr));