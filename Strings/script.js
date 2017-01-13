'use strict';

let arr = ['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']

function solve(str)
{
    let text = str[0];
    let startTag = text.indexOf('\<');
    let endTag = text.indexOf('\>');
    let nameTag = text.substring(startTag + 1, endTag);
    console.log(nameTag);
}
solve(arr);

// function input(str)
// {
//     let searchWord = str[0],
//         string = str[1],
//         result = subString(string, searchWord);
//     console.log(result);
// }

function subString(text)
{
    let startTag = text.indexOf('\<');
    let endTag = text.indexOf('\>');
    let nameTag = text.substring(startTag, endTag);
    while (endTag > -1)
    {
        indexOfWord = text.indexOf(word, indexOfWord + 1)
        count += 1;
    }
    return count;
}





