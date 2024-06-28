/**
 * Goal: to sort list of items
 * When to apply: 
 * 1. when working with smaller datasets. 
 * 2. when the array is particially sorted.
 * Advatage: 
 *  1. same as bubble-sort with slightly improved performance with less cpu usage
 *  2. can be used to sort even when you don't have full data. Beacuse it only needs the left side of the array to do sorting
 */
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            console.log(arr)
        }
        arr[j + 1] = key;
    }
    return arr;
}

const array = [5, 12, 11, 13, 5, 6];
console.log(insertionSort(array));
