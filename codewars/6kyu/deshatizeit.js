function dashatize(num) {
    //get 'em

    //convert to a string
    str = num.toString();

    //exception 1
    if (str=="NaN"){
      return str;
    }
    
    //exception 2
    if (parseInt(str) < 0){
      str = str.substring(1);
    }
    
    //declare return string
    let ret_str = "";

    //actual logic
    for(let i = 0; i < str.length; i++){
    //even number just move on
      if(parseInt(str[i]) % 2 == 0){
        ret_str += str[i];
      }
    //odd number needs to be taken care of
      else{
        if(ret_str[ret_str.length-1] == "-"){
          ret_str += str[i]+"-";
        }
        else{
          ret_str += "-"+str[i]+"-";
        }
      }
    }
    if(ret_str.charAt(0) == "-"){
      ret_str = ret_str.substring(1);
    }
    
    if(ret_str.charAt(ret_str.length-1) == "-"){
      ret_str = ret_str.substring(0,ret_str.length-1);
    }
    return ret_str;
  };