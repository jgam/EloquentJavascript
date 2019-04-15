function queueTime(customers, n) {
    //TODO
    var myArray = new Array(n).fill(0);
    for(let i = 0; i < customers.length; i++){
      myArray[0] += customers[i];
      myArray.sort((a,b)=>a-b);
      console.log(myArray);
    }
    return myArray[myArray.length-1];
    
  }

var myArray = new Array(3).fill(0);

console.log(myArray);

myArray[0] = 11
myArray[2] += 230
myArray[1] += 35
myArray = [1, 12, 235,2221, 56, 11,1111];

function comparable(a,b){
    console.log(myArray)
    console.log(a, b, a-b);
    console.log(myArray.indexOf(b))
    return a-b;
}

//console.log(myArray)
//console.log(myArray.sort((a,b)=>console.log(a,b)))
console.log('*************************')
//console.log(myArray.sort((a,b)=>console.log(a-b)))
console.log('*************************')
//console.log(myArray.sort((a,b)=>(a-b)))
console.log('*************************')
myArray = [1, 12, 235,2221, 56, 11, 1111,2,3,4,5];
console.log(myArray.sort(comparable))
