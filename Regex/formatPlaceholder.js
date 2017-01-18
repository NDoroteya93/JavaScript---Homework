'use strict';

let arr = [
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]

function solve(args) {
    let objKeysRegex = /({|,)(?:\s*)(?:')?([A-Za-z_$\.][A-Za-z0-9_ \-\.$]*)(?:')?(?:\s*):/g;
    let newQuotedKeysString = args[0].replace(objKeysRegex, "$1\"$2\":");
    let replacements = JSON.parse(newQuotedKeysString);

    let str = args[1];
    String.prototype.format = function(args) {
        var str = this;
        return str.replace(String.prototype.format.regex, function(item) {
            let objVal = item.substring(2, item.length - 1);
            let replace;
            replace = args[objVal];
            return replace;
        });
    };
    String.prototype.format.regex = new RegExp('#{-?[A-Za-z0-9]+}', 'g');
    str = str.format(replacements);
    return str;
}

solve(arr);