// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
    // var count = 0;
    // for (var i of str){
    //     if ("aeiou".indexOf(i.toLowerCase()) >= 0) {
    //         count++;
    //     }
    // }
    // return count;

    //return str.replace(/[^aeiou]/gi, '').length;

    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
