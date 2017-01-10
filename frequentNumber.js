'use strict';

let arr = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];

function frequentNumber(arr)
{
    let N = +arr.shift();
    let sortArr = arr.sort();
    let result = '';
    let count = 1;
    let lastCount;
    for (let i = 0; i < N; i += 1)
    {
        if (sortArr[i] === sortArr[i + 1])
        {
            count += 1;
        } else
        {
            if (lastCount < count)
            {
                result = `${arr[i]} (${count} times)`;
            }
            lastCount = count;
            count = 1;
        }
    }
    console.log(result)
}