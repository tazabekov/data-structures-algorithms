var arr = [2,4,3,6,3,1,7,5];

function bubbleSort(arr) {
    for (var i=0; i < arr.length; i++) {
        for (var j=i+1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// O(n^2)
console.log(bubbleSort(arr));