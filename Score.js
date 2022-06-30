var calPoints = function (ops) {
  var result = null;
  var arrayResult = new Array();

  for (let i = 0; i <= ops.length-1; i++) {

        if (ops[i] === "+" && arrayResult.length >= 2){
          console.log("here1");
          let sum =
            arrayResult[arrayResult.length - 1] +
            arrayResult[arrayResult.length - 2];
          arrayResult.push(sum);
          result+= sum;
        }

        else if(ops[i] === "D" && arrayResult.length >= 1){
          let multi = 2 * arrayResult[arrayResult.length - 1];
          arrayResult.push(multi);
          result+= multi;
        }

        else if (ops[i] === "C" && arrayResult.length >= 1){
          let remove = arrayResult.pop();
          result-= remove;
        }
        else {
          let number = parseInt(ops[i]);
          arrayResult.push(number);
          result+= number; 
        }
      }
    console.log(arrayResult);

    return result;
};

ops = ["5", "2", "C", "D", "+"];

console.log(calPoints(ops));
