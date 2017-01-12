'use strict';


// recursive function to copy an object

function deepCopy(obj)
{
    if (obj === null || typeof obj !== 'object')
    {
        return obj;
    }

    let temp = obj.constructor(); // give temp the original obj's constructor
    for (const key in obj)
    {
        temp[key] = deepCopy(obj[key]);
    }

    return temp;
}

let pesho = {
    name: "Pesho",
    age: 18
};

let gosho = (deepCopy(pesho));
pesho.name = "Gosho";

console.log(pesho);
console.log(gosho);