'use strict';

let arr = [
    ' <html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
];

function solve(str) {
    let newStr = str.map((x) => x.trim()).join('');
    newStr = newStr.replace(/<\/?[^>]+(>|$)/g, '');
    console.log(newStr);

}

function solve(arr) {
    let i,
        insideTag = false,
        result = '',
        htmlContent = arr.map((x) => x.trim()).join('');
    for (i = 0; i < htmlContent.length; i += 1) {
        if (htmlContent[i] === '<') {
            insideTag = true;
        } else if (htmlContent[i] === '>') {
            insideTag = false;
        } else if (!insideTag) {
            result += htmlContent[i];
        }
    }
    console.log(result);
}

function solve(args) {
    let output = '';
    let tagSelector = /<.*?>/ig;

    for (let line of args) {
        output += line.replace(tagSelector, '').trim();
    }

    console.log(output);
}
solve(arr);