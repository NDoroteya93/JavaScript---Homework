'use strict';

let arr = [')(a+b))'];


function correctBrackets(arr)
{
    let string = arr[0];
    let count = 0;
    const len = string.length;
    for (let char = 0; char < len; char += 1)
    {
        if (string[char] === '\(')
        {
            count += 1;
        } else if (string[char] === '\)')
        {
            count -= 1;
        }
    }

    if (count != 0)
    {
        console.log('Incorrect');
    } else
    {
        console.log('Correct');
    }

}

correctBrackets(arr);