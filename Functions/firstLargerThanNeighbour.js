'use strict';
let arr = ['6', '-26 -25 -28 31 2 27'];
function firstLargerThanNeighbours(arr)
{
    let N = +arr[0],
        array = arr[1].split(' '),
        result = 0;
    function solve(sizeArray, array)
    {
        let numbers = array.map(Number)
        let index = 0;
        for (let i = 1; i < sizeArray - 1; i += 1)
        {
            if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1])
            {
                index = i;
                break;
            } else
            {
                index = -1;
            }
        }
        return index;
    }
    result = solve(N, array);
    console.log(result);
}
console.log(firstLargerThanNeighbours(arr));

let iterations = 1000000;
console.time('Function First Larger Than Neighbours');
for (var i = 0; i < iterations; i += 1)
{
    firstLargerThanNeighbours(arr);
}
console.timeEnd('Function First Larger Than Neighbours');