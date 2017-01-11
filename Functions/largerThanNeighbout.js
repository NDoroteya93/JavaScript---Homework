'use strict';
let arr = ['6', '-26 -25 -28 31 2 27'];
function largerThanNeighbours(arr)
{
    let N = +arr[0],
        array = arr[1].split(' '),
        result = 0;
    function solve(sizeArray, array)
    {
        let numbers = array.map(Number)
        let count = 0;
        for (let i = 1; i < sizeArray - 1; i += 1)
        {
            if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1])
            {
                count += 1;
            }
        }
        return count;
    }
    result = solve(N, array);
    return result;
}
console.log(largerThanNeighbours(arr));

let iterations = 1000000;
console.time('Function Larger Than Neighbours');
for (var i = 0; i < iterations; i += 1)
{
    largerThanNeighbours(arr);
}
console.timeEnd('Function Larger Than Neighbours')