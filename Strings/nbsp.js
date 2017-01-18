'use strict';

let arr = ['hello world'];

function solve(str) {
    let text = str[0],
        newStr = new String(text);
    newStr = newStr.replace(/ /g, '&nbsp;');
    console.log(newStr);

}
solve(arr);