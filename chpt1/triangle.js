// Looping a Triangle

console.log("Hello world")
//triangle
for(var sugoi= '#'; sugoi.length<8; sugoi = sugoi + '#'){
    console.log(sugoi);
  }

//fizzbuzz
for(let i = 1; i < 101; i++){
    if (i % 3 ==0 && i % 5 == 0){
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0){
      console.log('Fizz');
    }
    else if (i%5 == 0){
      console.log('Buzz');
    }
    else{
      console.log(i);
    }
  };

function add(num1,num2){
    var sum = num1 + num2;
    return sum;
}
var result = add(10, 20); //30
alert(result);  // Error


