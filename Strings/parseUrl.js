'use strict';

let arr = ['http://telerikacademy.com/Courses/Courses/Details/239'];

function solve(args) {
    let url = args[0],
        protocol,
        server,
        resources,
        splitedUrl = url.substring(url.indexOf('://') + 3, url.length),
        splitArr = splitedUrl.split('/'),
        urltest;

    if (url.indexOf('://') > -1) {
        protocol = url.split('://')[0];
        server = splitArr[0];
        urltest = splitedUrl.replace(splitArr[0], '');
        resources = urltest.substring(urltest.indexOf(urltest[1] - 1), urltest.length);
    }

    console.log(`protocol: ${protocol}\nserver: ${server}\nresource: ${resources}`);
}

solve(arr);