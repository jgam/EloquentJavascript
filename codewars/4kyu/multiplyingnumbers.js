function multiply(a, b)
{
  //
  if (a.length < 5 && b.length < 5) {
        return (parseInt(a) * parseInt(b)).toString();
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    result.reverse();
    for (i = 0; i < result.length; i++){
      if (result[i] === 0){
         result.splice(i--, 1);
      }else{
        i = result.length * 2;
      }
    }

    return result.join('').toString();
}