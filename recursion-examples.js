//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function looper(n) {
    clear();
    while (n >= 0) {
        console.log(n);
        n--;
    }
    console.log("finished");
}

//looper(4);

//2. Next, try looping just like above except using recursion
function looperRecursive(n){
    if (n < 0) {
        return console.log("finished");
    } else {
        console.log(n--);
        looperRecursive(n);
    }
}
//looperRecursive(4);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, power) {
    clear();
    var result = base;
    while(power > 1) {
        result *= base;
        power--;
    }
    return result;
}
//exponent(2,20);

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, power){
    if (power <= 1) {
        return base;
    } else {
        return base*recursiveExponent(base, power-1);
    }
}
//console.log(recursiveExponent(2,5));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    var result = [],
        index = 0;

    (function recurse(arr, index) {
        if (index == arr.length) {
            return;
        } else {
            result.push(arr[index++] * num);
            recurse(arr, index);
        }
    })(arr, index)

    return result;
}
// var initArr = [1,2,3,4];
// console.log(initArr);
// console.log(recursiveMultiplier(initArr, 2));

function recursiveMultiplierMutate(arr, num) {
    if (arr.length == 0) {
        return;
    }

    var newItem = num*arr.pop();
    recursiveMultiplierMutate(arr, num);
    arr.push(newItem);
    return arr;
}
var initArr = [1,2,3,4];
console.log(initArr);
console.log(recursiveMultiplierMutate(initArr, 2));
console.log(initArr);

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse (arr) {
    var result = [],
        index = arr.length-1;

    (function recurse(arr, index) {
        if (index < 0) {
            return;
        } else {
            result.push(arr[index--]);
            recurse(arr, index);
        }
    })(arr, index);

    return result;
}
//var initArr = [1,2,3,4];
// console.log(recursiveReverse(initArr));
// console.log(initArr);
