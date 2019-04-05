function dashatize(num) {
    //get 'em
    str = num.toString();
    if (str=="NaN"){
      return str;
    }
    
    if (parseInt(str) < 0){
      str = str.substring(1);
    }
    
    let ret_str = "";
    for(let i = 0; i < str.length; i++){
      if(parseInt(str[i]) % 2 == 0){
        ret_str += str[i];
      }
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