var superObj = {superVal:'super'}
//var subObj = {subVal:'sub'}
//subObj.__proto__ = superObj;//prototype, __proto__

//superObj를 부모로 하는 class 를 만들어
var subObj = Object.create(superObj);
subObj.subval = 'sub'

console.log('subObj.subVal =>', subObj.subVal);
console.log('superVal.subVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);