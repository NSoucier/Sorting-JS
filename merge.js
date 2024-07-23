function merge(arr1, arr2) {
    const arrSorted = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            arrSorted.push(arr1[pointer1]);
            pointer1++;
        } else {
            arrSorted.push(arr2[pointer2]);
            pointer2++;
        }
    }
    
    if (pointer1 === arr1.length) {
        while (pointer2 < arr2.length) {
            arrSorted.push(arr2[pointer2]);
            pointer2++;
        }
    } else {
        while (pointer1 < arr1.length) {
            arrSorted.push(arr1[pointer1]);
            pointer1++;
        }
    }

    return arrSorted
}

function mergeSort(arr) {
    if (arr[0] === undefined) return []
    if (arr.length === 1) return arr
    let midPoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.splice(0,midPoint));
    let right = mergeSort([...arr]);
    
    return merge(left, right);
}

module.exports = { merge, mergeSort};