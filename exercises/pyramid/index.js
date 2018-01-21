// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)     r   n   n-2*r-1
//       '  #  '    1   5   2
//       ' ### '    2   5
//       '#####'    3   5

function pyramid(n) {
    let width = 2*n-1;
    Array.from({length: n}).forEach((t, i)=>{
        // let tags    = Array.from({length: (1+2*i)}, ()=>"#").join(""),
        //     spaces  = Array.from({length: (width - tags.length)/2}, ()=>" ").join("");
        let tags    = "#".repeat(1+2*i),
            spaces  = " ".repeat((width - tags.length)/2);

        console.log(spaces+tags+spaces);
    });
}

module.exports = pyramid;
