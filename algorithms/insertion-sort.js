function insertionSort(arr) {
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j <= i; j++) {

            if (arr[i] <= arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(insertionSort(arr));