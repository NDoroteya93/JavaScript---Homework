'use strict';

let arr = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];

function binarySearch(arr)
{
    const N = +arr.shift();
    const X = arr.pop();
    const mid = Math.floor(N / 2);
    let sortArr = arr.sort((a, b) => a - b);
    if (X === sortArr[mid])
    {
        console.log(mid);
    } else if (X > sortArr[mid])
    {
        for (let i = mid; i < N; i += 1)
        {
            if (X === sortArr[i])
            {
                console.log(i);
                break;
            }
        }
    } else
    {
        for (let i = mid; i > 0; i -= 1)
        {
            if (X === sortArr[i])
            {
                console.log(i);
                break;
            }
        }
    }
}