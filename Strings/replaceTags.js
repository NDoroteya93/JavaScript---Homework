'use strict';
let arr = ['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']

function solve(args) {
    let input = args[0],
        openTag = /<a[^>]*>/,
        closeTag = /<\/a>/,
        href = /"(.*?)"/g,
        removeQuotes = /"/g,
        getHref = input.match(href),
        replaceTag;

    for (let i = 0; i < getHref.length; i += 1) {
        replaceTag = getHref[i].replace(removeQuotes, '');
        let url = `](${replaceTag})`;
        input = input.replace(openTag, '[');
        input = input.replace(closeTag, url);

    }
    console.log(input);
}