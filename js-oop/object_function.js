var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(prefix){
    return prefix+(this.first+this.second);
}

//sum 이라는 객체를 실행시킨다
sum.call();//sum()과 똑같음

//javascript에서는 함수도 객체라서, call()은 객체를받은 함수를 실행할때 쓰인다
console.log("sum.call(kim)", sum.call(kim));
console.log("lee.call(kim)", sum.call(lee,': '));

//bind is to statically create a special function out of a function and create it as a variable
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());