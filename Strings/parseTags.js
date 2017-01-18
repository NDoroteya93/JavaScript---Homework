'use strict';

let arr = ['<lowcase>We are <orgcase>liViNg</orgcase> in a <upcase>ylLow <upcase>submarine</upcase></upcase>. <upcase>We <orgcase>doN\'t</orgcase> have</upcase> <lowcase>anything</lowcase> else.</lowcase>'];

// function solve(str) {
//     let text = str[0];
//     let newStr = new String(text);
//     newStr = orgCase(newStr)
//     newStr = lowCase(newStr);
//     newStr = upCase(newStr);

//     let cleanText = newStr.replace(/<\/?[^>]+(>|$)/g, "");

//     function orgCase(text) {
//         let firstIndex = text.indexOf('<orgcase>');
//         let insideTag = '';

//         while (firstIndex > -1) {
//             insideTag = text.substring(firstIndex + 9, text.indexOf('</orgcase>', firstIndex));
//             let cleanText = insideTag.replace(/<\/?[^>]+(>|$)/g, '');
//             text = text.replace(insideTag, cleanText);
//             firstIndex = text.indexOf('<orgcase>', firstIndex + 1);

//         }
//         return text;
//     }

//     function lowCase(text) {
//         let firstIndex = text.indexOf('<lowcase>');
//         let insideTag = '';
//         let result = '';

//         while (firstIndex > -1) {
//             insideTag = text.substring(firstIndex + 9, text.indexOf('</lowcase>', firstIndex));
//             let cleanText = insideTag.replace(/<\/?[^>]+(>|$)/g, "");
//             let lowText = cleanText.toLowerCase();
//             text = text.replace(insideTag, lowText);

//             firstIndex = text.indexOf('<lowcase>', firstIndex + 1);

//         }
//         return text;
//     }

//     function upCase(text) {
//         let firstIndex = text.indexOf('<upcase>');
//         let insideTag = '';
//         let result = '';

//         while (firstIndex > -1) {
//             insideTag = text.substring(firstIndex + 8, text.indexOf('</upcase>', firstIndex));
//             let cleanText = insideTag.replace(/<\/?[^>]+(>|$)/g, "");
//             let upperText = cleanText.toUpperCase();
//             text = text.replace(insideTag, upperText)
//             firstIndex = text.indexOf('<upcase>', firstIndex + 1);
//         }
//         return text;
//     }
//     console.log(cleanText);
// }
// solve(arr);

function solve(args) {
    let openUpper = 'upcase',
        closeUpper = '/upcase',
        openLower = 'lowcase',
        closeLower = '/lowcase',
        openOriginal = 'orgcase',
        originalClose = '/orgcase',
        upperScope = 'up',
        lowerScope = 'low',
        orgScope = 'initial';
    let CheckTag = false,
        scopeStack = [],
        currentScope = orgScope,
        currentTag = '',
        result = '';

    for (let i = 0; i < args[0].length; i++) {
        let c = args[0][i] + '';

        if (c === '<') {
            CheckTag = true;
        } else if (c === '>') {
            CheckTag = false;
            if (currentTag === openUpper) {
                scopeStack.push(currentScope);
                currentScope = upperScope;
            } else if (currentTag === openLower) {
                scopeStack.push(currentScope);
                currentScope = lowerScope;
            } else if (currentTag === openOriginal) {
                scopeStack.push(currentScope);
                currentScope = orgScope;
            } else if (currentTag === closeUpper) {
                currentScope = scopeStack.pop();
            } else if (currentTag === closeLower) {
                currentScope = scopeStack.pop();
            } else if (currentTag === originalClose) {
                currentScope = scopeStack.pop();
            } else {
                result += currentTag;
            }
            currentTag = '';
        } else if (CheckTag) {
            currentTag += c;
        } else if (!CheckTag) {
            if (currentScope === upperScope) {
                result += c.toUpperCase();
            } else if (currentScope === lowerScope) {
                result += c.toLowerCase();
            } else {
                result += c;
            }
        }
    }
    console.log(result);
}