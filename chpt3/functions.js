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