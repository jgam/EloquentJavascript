function dirReduc(arr){
    var i = 0;    
    while(i < arr.length) {
      if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i+1] === "WEST") ||
      (arr[i] === "WEST" && arr[i+1] === "EAST")) {
          console.log(i)
          console.log(arr)
          arr.splice(i, 2);
          i--;
          console.log(arr)
      }
      else {
          i++;
      }
    }
    return arr;
  }