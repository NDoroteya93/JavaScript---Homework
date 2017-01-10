'use strict';

let arr = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];

function maximalSequance(arr)
{
    let N = +arr.shift();
    let result = [];
    let count = 1;
    let lastCount;
    if (N >= 1 && N <= 1024)
    {
        for (let i = 0; i < N; i += 1)
        {
            if (arr[i] === arr[i - 1])
            {
                count += 1;
            } else
            {
                if (lastCount < count)
                {
                    result[0] = count;
                }
                lastCount = count;
                count = 1;
            }
        }
    }
    console.log(result[0]);
}