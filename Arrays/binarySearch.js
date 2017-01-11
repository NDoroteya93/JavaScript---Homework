'use strict';

let arr = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];

function binarySearch(arr) {
    let array = arr.map(Number),
        N = array.shift(),
        X = array.pop(),
        sortArr = array.sort((a, b) => a - b),
        start = 0,
        end = sortArr.length - 1,
        mid = 0,
        currentElement;
    while (start <= end) {
        mid = (start + end) / 2 | 0;
        currentElement = sortArr[mid];
        if (X === sortArr[0]) {
            return '0';
        }
        if (currentElement < X) {
            start = mid + 1;
        } else if (currentElement > X) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
