'use strict';

let arr = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'];

function selectionSort(arr)
{
    let N = +arr.shift();
    for (let i = 0; i < N; i += 1)
    {
        for (let j = i + 1; j < N; j += 1)
        {
            if (arr[i] > arr[j])
            {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    arr.forEach(x => console.log(x));
}

selectionSort(arr);