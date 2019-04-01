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
        console.log("calling with ", args);
        let result = f(...args);
        console.log("called with ", args, ", returned", result);
        return result;
    }
}

noisy(Math.min)(3,2,1);//calling with [3,2,1]
//called with [3,2,1], returned 1