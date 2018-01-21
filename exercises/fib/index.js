// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, hash) {
  hash = hash || {};

  if(hash[n]){
    return hash[n];
  }

  if(n <= 0) {
    hash[0] = 0;
  } else if(n === 1) {
    hash[1] = 1;
  } else {
    hash[n] = fib(n-1, hash) + fib(n-2, hash);
  }
  return hash[n];
}


module.exports = fib;
