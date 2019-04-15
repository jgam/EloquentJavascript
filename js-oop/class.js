//class
//factory that creates objects
//constructor actually creates settings
class Person{
    //when creating method, we don't use function
    //sum()
    //before we create objects, we need to create something -> constructor
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor')
    }

    sum(){
        return 'prototype: '+(this.first+this.second);
    }
}



var kim = new Person('kim', 10, 20);
console.log('kim', kim);
console.log(kim.sum())