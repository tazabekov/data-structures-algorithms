function search_binary(arr, item) {
    let high = arr[arr.length-1],
        low = arr[0];

    while (high >= low) {
        var mid = Math.floor((high + low)/2),
            guess = arr[mid];

        if (guess == item) {
            return mid;
        } else if (guess < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

var test = Array.from(
    {length: 100},      // array-like object
    (item, i)=>i+1      // map function (optional)
); // [1,2,3 ... 100]
search_binary(test, 2);