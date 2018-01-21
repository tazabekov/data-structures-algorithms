// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(str){
    let charMap = {};
    for(let c of str.replace(/\W/g, "").toLowerCase()){
        charMap[c] = charMap[c] + 1 || 1;
    }
    return charMap;
}

function anagrams(stringA, stringB) {
    let mapA = createCharMap(stringA),
        mapB = createCharMap(stringB);

    if (Object.keys(mapA).length != Object.keys(mapB).length) {
        return false;
    } else {
        return Object.keys(mapA).every(c => mapA[c]==mapB[c]);
    }
}

module.exports = anagrams;
