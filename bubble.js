function bubbleSort(arr) {
    for (let j=arr.length; j > 0; j--) {
        for (let i=0; i < j-1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;

            }
        }
    }

    return arr
}

module.exports = bubbleSort;