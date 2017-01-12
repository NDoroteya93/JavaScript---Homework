'use strict';


function hasProp(obj, name)
{
    let result = '',
        length = '',
        count = 0;
    for (const key in obj)
    {
        count += 1;
        if (obj.hasOwnProperty(key))
        {
            result += name + '.' + key + '=' + obj[key] + '\n';
        }
    }
    length = count;
    return result + '\n' + length;
}

let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

console.log(hasProp(myCar, 'myCar'));