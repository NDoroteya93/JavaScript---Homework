'use strict';

let arr = [
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]

function input(str)
{
    let searchWord = str[0],
        string = str[1],
        result = subString(string, searchWord);
    console.log(result);
}

function subString(text, word)
{
    text = text.toLowerCase();
    word = word.toLowerCase()
    let indexOfWord = text.indexOf(word),
        count = 0;
    while (indexOfWord > -1)
    {
        indexOfWord = text.indexOf(word, indexOfWord + 1)
        count += 1;
    }
    return count;
}


input(arr);




