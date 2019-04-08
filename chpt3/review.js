//this chapter taught how to write own functions. The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value.

//ㅡㅑㅜㅑㅡㅕㅡ

function min(a,b){
    return (a<b ? a : b);
}

let v = min

console.log(typeof(v))
console.log(min(0,10));
console.log(v(0,-10));

