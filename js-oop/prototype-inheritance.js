var superObj = {superVal:'super'}
//var subObj = {subVal:'sub'}
//subObj.__proto__ = superObj;//prototype, __proto__

//superObj를 부모로 하는 class 를 만들어
/*
var subObj = Object.create(superObj);
subObj.subval = 'sub'

console.log('subObj.subVal =>', subObj.subVal);
console.log('superVal.subVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
*/
kim = {
    name:'kim',
    first:10,
    second:20,
    sum:()=> this.first+this.second//in the parameter, self needs to be in there
    //sum: function(){return this.first+this.second}
}

lee = {
    name: 'lee',
    first:10,
    second:10,
    avg:function(){return (this.first+this.second)/2}
}

var shim = Object.create(kim);
shim.name = 'shim';
shim.first = 1;
shim.second = 2
shim.avg = function(){
    return (this.first+this.second)/2
}


lee.__proto__ = kim;
console.log(typeof(kim.sum()))
console.log('kim.sum() : ', kim.sum())

a = function(){return 'a is called'}
b = () => 1+4
console.log(a());
console.log(b())