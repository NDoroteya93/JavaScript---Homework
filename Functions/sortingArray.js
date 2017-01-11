'use strict';
let arr = ['6', '3 4 1 5 2 6'];
function sortingArray(arr)
{
    let N = +arr[0],
        array = arr[1].split(' '),
        result = 0;
    function solve(sizeArray, array)
    {
        let numbers = array.map(Number)
        for (let i = 0; i < sizeArray; i += 1)
        {
            for (let j = i + 1; j < sizeArray; j += 1)
            {
                if (numbers[i] > numbers[j])
                {
                    let temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
        return numbers.join(' ');
    }
    result = solve(N, array);
    console.log(result);
}
console.log(sortingArray(arr));