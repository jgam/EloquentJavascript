class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : '+(this.first+this.second);
    }
    // avg(){
    //     return (this.first+this.second)/2;
    // }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());

//Inheritance?

//What if I want to functino avg() one time only but not to all the
//classes that I had used?
//-> Inheritance

class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

//with extends, we don't have to rewriute Person

//what is inheritance
//-> it is to inherit duplicate features and methods to child class so that
//we can implement unique features to the child class based on the original
//parent class

//what is child class? and how should it be coded?
//any unique feature that you want to use but not to the other objects that
//are originated from parent class
