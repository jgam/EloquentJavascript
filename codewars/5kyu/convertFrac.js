function convertFrac(lst){
    //Your code here
    // get the leat common factor => euclidean algorithm
    // get the factors of each and multiply it to numerator
    
    //get the LCM
    function get_LCM(a, b){
      let temp = 0;
      let large = Math.max(a,b);
      let small = Math.min(a,b);
      
      while(large%small != 0){
        temp = large
        large = small;
        small = temp%large
      }
      let gcd = Math.min(large, small);
      return (a*b/gcd);
    }
    
    //Declaring variables
    let LCM = 1
    let denom_list = [];
    let numer_list = [];
    
    for(let i = 0; i < lst.length; i++){
      LCM = get_LCM(LCM, lst[i][1]);
      numer_list.push(lst[i][0]);
      denom_list.push(lst[i][1]);
    }
    
    let factor_list = [];
    let ret_list = [];
    let numer = 0
    let ret_str = '(';
    
    for(let i =0; i<denom_list.length; i++){
      //factor_list.push(LCM / denom_list[i]);
      numer = LCM / denom_list[i] * numer_list[i]
      ret_str += numer.toString()+','+LCM.toString()+')(';
    }
    ret_str = ret_str.substring(0, ret_str.length-1);
    return ret_str
  }