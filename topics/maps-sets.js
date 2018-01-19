clear();
function unique(arr) {
    return [...(new Set(arr))];
}

var values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log( unique(values) ); // Hare, Krishna, :-O
// console.log([...new Set(values)]);


var arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    var map = new Map();

    arr.forEach(word => {
        let chars = word.toLowerCase().split('').sort();
        map.set(chars, word);
    });
    return map.values();
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"