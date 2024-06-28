function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length/2) 
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(left.length > leftIndex && right.length > rightIndex) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    } 
    const final = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    return final;
}

console.log(mergeSort([7,7,7,6,7,6,4,5]));