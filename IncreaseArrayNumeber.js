'use strict';


function allocateArray(n) {
    let N = +n[0];
    let arr = new Array(N);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
        console.log(arr[i]);
    }
}