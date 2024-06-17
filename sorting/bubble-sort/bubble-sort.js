/**
 * Goal: to sort list of items
 * When to apply: 
 *  1. when working with smaller datasets. 
 *  2. when array is nearly sorted (because it leaves out already sorted part)
 * Advatage: 
 *  1.simplicity
 *  2.low memory usage
 */
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swap = false;
        for (let j = 0; j < n - i - 1; j++) { // j < n - i - 1 is important. Because it leaves out already sorted array. 
            //move biggest item to the end of smaller itmes
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        console.log(arr);
        if(!swap) break; // if no swaps are made, it means that array is already sorted
    }
    return arr;
}

const array = [
    7,6,4,3
  ];
bubbleSort(array);