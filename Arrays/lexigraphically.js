'use strict';
let arr = ['hello', 'halo'];

function compareArrays(args)
{
    let firstWord = args[0],
        secondWord = args[1];

    if (Array.isArray(firstWord))
    {
        firstWord = firstWord.join('');
    }

    if (Array.isArray(secondWord))
    {
        secondWord = secondWord.join('');
    }

    if (firstWord > secondWord)
    {
        return '>';
    } else if (firstWord < secondWord)
    {
        return '<';
    } else
    {
        return '=';
    }
}