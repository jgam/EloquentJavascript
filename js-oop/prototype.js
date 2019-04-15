function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;

}
console.log('changed');
Person.prototype.sum = function(){
    return 'prototype : ' + (this.first+this.second);
}

var kim = new Person('kim', 10, 20);
// kim is declared with constructor Person

kim.sum = function(){
    return 'modified : '+(this.first+this.second);
}
// now what if we want to permanently change the function sum in that way?
//-> Person.prototype.sum
//-> prototype means original. So, we are declaring original method with prototype.

var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

//prototype의 뜻?
//오리지널이란 뜻으로 컨스트럭터에 새로운 매쏘드를 저장할때쓴다
//prototype 안썼을때 일어나는 문제점?
//1억개의 개체가있을때, 이 개체마다 새로운 매쏘드를 선언하여야함으로, prototype으로 code reusability를 만족시킬수있다.

