function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

let labels = [];

repeat(5, i => {
    labels.push('Unit ${i+1}');
});
console.log(labels);

//functions that change other functions

function noisy(f){
    return (...args) => {
        console.log("calling with ", args, typeof(args), typeof(args[4]),typeof(args[1]));
        let result = f(...args);
        console.log("called with ", args, ", returned", result);
        return result;
    }
}
let a = "first";
let b = "second";

noisy(Math.min)(a,b,3,2,1);//calling with [3,2,1]
//called with [3,2,1], returned 1
//NAN because we can't get a minimum out of object with strings!

//functions to provide new types of control flow

function unless(test, then){
    if (!test) then();
}

repeat(3, n=> {
    unless(n%2 == 1, new_func =>{
        console.log(n, "is even");
    });
});
// -> 0 is even
// -> 2 is even