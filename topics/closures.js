// Filter through function
function inBetween(a,b){
    return function (item) {
        return item >= a && item <= b;
    }
}

function inArray(arr){
    return function (item) {
        return arr.includes(item);
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inBetween(3, 6)));

// Sort by field
function byField(field){
    return (a, b) =>  a[field] > b[field] ? 1: -1;
}

var users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.sort(byField('age'));


//  army[2](); to return 2
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 5) {
        let j = i;
        function shooter() {
            alert(j);
        };

        shooters.push(shooter);

        i++;
    }

    return shooters;
}

var army = makeArmy();

army[2]();

// OR:
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 5) {

        function shooter(i) {
            return function(){
                alert(i);
            }
        };

        shooters.push(shooter(i));

        i++;
    }

    return shooters;
}

var army = makeArmy();

army[4]();