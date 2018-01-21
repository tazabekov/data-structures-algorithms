// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, line = "") {

    if(n===row){
        return;
    }

    if(n === line.length) {
        console.log(line);
        return steps(n, row + 1);
    }

    line += line.length <= row ? "#" : " ";

    steps(n, row, line);

    // new Array(n).reduce((acc, curr) => {
    //     let line = acc+"#";
    //     console.log(line.padEnd(n));
    //
    //     return line;
    // }, "");

    // for (let i=1; i <= n; i++){
    //     let line = "";
    //     for (let j=0; j < n; j++){
    //         line += j < i ? "#" : " ";
    //
    //     }
    //     console.log(line);
    // }
}

module.exports = steps;
