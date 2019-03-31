//Homework:

//- refactor each so it takes an object's keys
//- figure out compose


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

function compose (a, b) {//returns new funcftion -> the result of passing the value from the 1st func -> 2nd func
  return b(a())
}

var foo = compose(multiplyTwo, addOne);
//console.log(foo(5)); // should return 11
//console.log(foo(10)); // should return 21

console.log(typeof(foo))
console.log(foo(5))

