'use strict';

let arr = [
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]


function youngPerson(arr)
{
    let person = [];
    function Person(arr)
    {
        this.firstname = arr[0];
        this.lastname = arr[1];
        this.age = arr[2];
    }
    for (let i = 0; i < arr.length; i += 3)
    {
        let personInfo = arr.slice(i, i + 3)
        let personObj = new Person(personInfo);
        person.push(personObj);
    }

    person.sort(function (a, b) { return a.age - b.age });
    console.log(person[0].firstname + ' ' + person[0].lastname);
}


youngPerson(arr);
