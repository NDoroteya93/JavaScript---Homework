'use strict';

let arr = ['8', '7', '3', '2', '3', '4', '2', '2', '4'];

function maximalIncreasingSequance(arr)
{
    let N = +arr.shift();
    let count = 1;
    let result = [];
    let lastCount;
    for (let i = 0; i < N; i += 1)
    {
        if (+arr[i] === +arr[i + 1] - 1)
        {
            count += 1;
        } else
        {
            if (lastCount < count)
            {
                result[0] = count;
            }
            lastCount = count;
        }
    }
    console.log(count);
}