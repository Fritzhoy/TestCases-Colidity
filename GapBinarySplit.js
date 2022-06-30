/*Find the Binary Gaps */

function solution(N){

  const binary = (N>>> 0).toString(2);
  console.log(binary);

  const arrayBiSplited = binary.split(1);
  console.log(arrayBiSplited);

  let binaryGap = 0;

  arrayBiSplited.map((item, index) =>{
    if(item.length > binaryGap && index > 0 & index < arrayBiSplited.length-1){
      binaryGap = item.length;
    }
  });

  return console.log(binaryGap);
}

solution (529);