var arr = [1,[2,3],[4,[5,6]]];

var a = [1,2,3,4];
var b = [2,4,6];

function common_sorted(init_a,b){
    var p1=0, p2=0,
        result = [];

    while(p1<a.length && p2<b.length){
        if(a[p1]===b[p2]){
            result.push(a[p1]);
            p1 += 1;
            p2 += 1;
        } else if(a[p1] > b[p2]){
            p2 += 1;
        } else {
            p1 += 1;
        }
    }
    return result;
}

common_sorted(a,b);