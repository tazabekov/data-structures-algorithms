// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
    // maxChar("apple 1231111") === "1"

function maxChar(str) {
    var hash = { biggest: ""},
        max = 0;

    str.split("").forEach(c=>{
        hash[c] = hash[c] + 1 || 1;

        if (hash[c] > max){
            hash.biggest = c;
            max = hash[c];
        }
    });
    return hash.biggest;
}

module.exports = maxChar;
