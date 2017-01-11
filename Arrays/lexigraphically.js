'use strict';
let arr = ['hello', 'halo'];

function compareString(str)
{
    let char1 = str[0].split(''),
        char2 = str[1].split(''),
        loops = Math.min(char1.length, char2.length),
        result = '',
        i;
    for (i = 0; i < loops; i += 1)
    {
        if (char1[i] > char2[i])
        {
            result = '>';
            break;
        } else if (char1[i] < char2[i])
        {
            result = '<';
            break;
        } else if ((char1.length === char2.length) && (char1[i] === char2[i]))
        {
            result = '=';
            break;
        } else if ((char1.length != char2.length) && (char1[i] === char2[i]))
        {
            char1.length > char2.length ? result = '>' : result = '<';
            char2.length > char1.length ? result = '<' : result = '>';
            break;
        }
    }
    console.log(result);
}
