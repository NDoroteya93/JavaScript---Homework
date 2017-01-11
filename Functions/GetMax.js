'use strict';

let = ['8 7 6'];

function GetMax(arr)
{
    let num = arr[0].split(' ');
    let numbeArray = num.map(Number);
    let sortArray = numbeArray.sort((a, b) => a - b);

    return sortArray[sortArray.length - 1];
}

console.log(GetMax(arr));