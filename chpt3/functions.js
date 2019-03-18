//Minimum

function min(a, b){
    if (a<b){
        return a
    }
    else if (b<a){
        return b
    }
    else{
        return "numbers are equal"
    }
}

console.log(min(0,10))//0
console.log(min(0, -10))//10
console.log(min(1,1))//numbers are equal

//Recursion

function isEven(target){
    function find(current, history){
        if(current == 1){
            console.log(history);
            return false;
        }
        else if(current == 0){
            console.log(history);
            return true;
        }
        else if(current < 0){
            return find(-current, "${current}")
        }
        else {
            return find(current-2, '(${history} - 2)');
        }
    }//`(${history} + 5)
    return find(target, "${target}");
}

console.log(isEven(24));//even
console.log(isEven(75));//odd
console.log(isEven(-1));//odd
//history to be printed?



