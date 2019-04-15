var memberArray = ['egoing', 'graphittie', 'leezhce'];

var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random()
    },
    floor:function(val){
        return Math.floor(val);
    }
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

// the use of "This" in obeject
var kim = {
    name: 'Kim',
    first: 10,
    second: 20,
    sum:function(f,s){
        return f+s;
    }
}

console.log(kim.sum(kim.first, kim.second));//=> 30
