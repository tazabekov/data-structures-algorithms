// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = Array.from({length: n}, (_, row)=>{
        return Array.from({length: n}, (_, col)=>{
            return row==0?col+1 : 0;
        });
    });

    let count = n-1, r = 0, c = n-1, first = true, i=n;
    var targetR, targetC;
    while(count > 0){
        if (first){
            targetR = r + count;
            targetC = c - count;
            for (r; r<targetR; r++){
                result[r][c] = i++;
            }
            for (c; c>targetC; c--){
                result[r][c] = i++;
            }
        } else {
            targetR = r - count;
            targetC = c + count;

            for (r; r>targetR; r--){
                result[r][c] = i++;
            }
            for (c; c<targetC; c++){
                result[r][c] = i++;
            }
        }

        first = !first;
        count--;
    }
    result[r][c] = i;

    return result;
}

module.exports = matrix;
