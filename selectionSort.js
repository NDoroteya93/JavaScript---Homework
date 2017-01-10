'use strict';

let arr = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'];


function selectionSort(arr) {
    let N = +arr.shift();
    let array = arr.map(Number);
    for (let i = 0; i < N; i += 1) {
        for (let j = i + 1; j < N; j += 1) {
            if (array[i] > array[j]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    array.forEach(x => console.log(x));
}


selectionSort(arr);