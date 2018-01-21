// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var arr=[], len = str.length;
  str.split("").forEach(function(c, i) {
    arr[len-i] = c;
  });
  return arr.join("");
}

module.exports = reverse;
