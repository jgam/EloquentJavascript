//flattening
//use reduce and concat functiions to flatten an array

let arrays = [[1,2,3],[4,5],[6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
console.log([1, 2, 3, 4].reduce((a, b) => a+b, []));


//your own loop
