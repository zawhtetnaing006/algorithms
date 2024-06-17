/**
 * Goal: to sort list of items
 * When to apply: 
 * 1. when working with smaller datasets. 
 * 2. when the array is not sorted in any ways
 * Advatage: 
 *  1.simplicity
 *  2.low memory usage
 */
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const array = [7,5,4,2];
console.log(selectionSort(array));
