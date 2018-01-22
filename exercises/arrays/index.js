var arr = [1, [2], [3, [4]], [5,[6,[7,8],9],10]];

function flatten(input) {
    var result = [],
        arr = input.slice();

    while(arr.length){
        let first = arr[0],
            rest = arr.slice(1);

        if (!Array.isArray(first)) {
            result.push(first);
            arr = rest;
        } else {
            arr = [...first, ...rest];
        }
    }

    return result;
}

function flattenRec(input) {
    var result = [];
    input.forEach(item => {
        if (Array.isArray(item)) {
            result = [...result, ...flatten(item)];
        } else {
            result.push(item);
        }
    })

    return result;
}

flatten(arr);