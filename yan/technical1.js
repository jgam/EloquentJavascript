/* Write a function called "each" that
takes two inputs: a collection (array or object) and a callback function.
"each" executes the callback function once for every element of
the collection.

Specifically, the callback function is provided 3 arguments:

1) the value of the current element being processed in the given collection
2) the index or key of the current element being processed in the given collection
3) the collection itself
*/

function each(array, callbackFunction) {
    for(let i = 0; i    callbackFunction(array[i], i, array);
    }
  }
  
  each([1, 2, 3], console.log);
  each({a: 1, b: 2, c: 3}, console.log);
  
  // TODO: Make this work for objects!