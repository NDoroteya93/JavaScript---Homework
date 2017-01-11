'use strict';

let arr = ['8', '28 6 21 6 -7856 73 73 -56', '73'];
function appearanceCount(arr)
{
    let array = arr[1].split(' ');
    const N = +arr[0];
    const X = +arr[2];
    let count = 0;
    for (let i = 0; i < N; i += 1)
    {
        if (+array[i] === X)
        {
            count += 1;
        }
    }
    return count;
}
console.log(appearanceCount(arr));

let iterations = 1000000;
console.time('Function Appearance Count');
for (var i = 0; i < iterations; i += 1)
{
    appearanceCount(arr);
}
console.timeEnd('Function Appearance Count')