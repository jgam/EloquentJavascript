/* Write a function called "compose".

"compose" takes two functions as inputs/parameters. Each function takes a single
argument.

"compose" returns a new function that, when run, returns the result of
passing the value from the first function to the second function.
*/

var multiplyTwo = function(x) {
  return x * 2;
};

var addOne = function(x) {
  return x + 1;
};

var compose = function(A,B) {
  return B(A);
}

var foo = function(x){
    return compose(multiplyTwo(x), addOne);
}

console.log(foo(5)); // should return 11
console.log(foo(10)); // should return 21

//console.log(compose(multiplyTwo(2), addOne))