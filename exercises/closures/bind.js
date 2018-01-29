function sum(a,b,c){
    return `${this.name} sums ${a+b+c}`;
}
var obj = {name: "asd"};


function bind(f, c){
    var rest = [].slice.call(arguments, 2);
    return function(){
        var innerArgs = [].slice.call(arguments),
            allArgs = rest.concat(innerArgs);
        return f.apply(c, allArgs);
    }
}

//bind(sum, obj, 1)(2,3) // 6


// ES6
function bind2(f, c, ...outer){
    return (...inner)=>f.apply(c, [...outer, ...inner]);
}