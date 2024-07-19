function bubbleSort(arr) {
    console.log('in here')
    for (let j=arr.length; j > 0; j--) {
        console.log(arr)
        for (let i=0; i < j-1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;

            }
        }
    }
    console.log('hereeeeeeeee')

    return arr
}

module.exports = bubbleSort;