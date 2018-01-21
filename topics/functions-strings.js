var a = "abcde";
var b = "abde";

one_edit_away(a,b);

function one_edit_away(a,b){
    var diff = Math.abs(a.length - b.length);
    if (diff >= 2) {return false;}
    else if(diff ===1){
        return one_bigger(a,b);
    } else {
        return same_length(a,b);
    }
};

function same_length(a,b){
    return true;
}

function one_bigger(a, b){
    var bigger = a.length > b.length ? a : b,
        smaller = bigger === a ? b : a,
        difference=0, i;

    for(i=0; i<smaller.length; i++){
        if(bigger[i+difference] !== smaller[i]){
            difference += 1;
            if (difference > 1) {return false;}
        }
    }
    return true;
}