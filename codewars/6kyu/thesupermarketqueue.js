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