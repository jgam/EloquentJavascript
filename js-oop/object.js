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
    sum:function(){
        return this.first+this.second;
    }
}

console.log(kim.sum(kim.first, kim.second));//=> 30

console.log(kim.sum(this.first, this.second));// => 30
// In object Kim, I used this.first & this.second to access this object's variables

var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    sum:function(){
        return this.first+this.second+this.sum.third;
    }
}
// do we have to make objects everytime we want to create objects? NO! Constructor!

var d1 = new Date('2019-04-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}

var kim = new Person('kim',10,20,30);
var lee = new Person('lee',10,10,10);

console.log('Person()', Person());
console.log('new Person()', new Person());//this 'new' makes it as a constructor function

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

//by creating constructore function, we can mass produce objects with different inputs
//and save it to variables

//constructor: setting the structure of object to mass produce them
//pros : we can create easily many objects

