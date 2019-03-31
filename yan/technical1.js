/* Write a function called "each" that
takes two inputs: a collection (array or object) and a callback function.
"each" executes the callback function once for every element of
the collection.

Specifically, the callback function is provided 3 arguments:

1) the value of the current element being processed in the given collection
2) the index or key of the current element being processed in the given collection
3) the collection itself
*/

function callbackFunction(value, index, collection){
    if (collection[index] == value){
        console.log("valid")
        //is array mutable?
    }
}

function each(array, callbackFunction) {
    for(let i =0; i< Object.entries(array).length; i++){
        callbackFunction(Object.entries(array)[i])
    }
  }
  
each([1, 2, 3], console.log);
each({a: 1, b: 2, c: 3}, console.log);
/*
console.log(typeof({a:1, b:2, c:3}))
v = {a:1, b:2, c:3}
console.log(v)
console.log(Object.entries(v))
console.log(Object.entries(v).length)
*/
// TODO: Make this work for objects!