function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function(){
        return this.first + this.second;
    }
}

var kim = new Person('kim', 10, 20);
// kim is declared with constructor Person

kim.sum = function(){
    return 'modified : '+(this.first+this.second);
}

var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());