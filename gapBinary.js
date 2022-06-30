//not working good

function getGaps(BinaryArray, gaps) {
  
  const firstOne = BinaryArray.indexOf("1");

  if (firstOne > -1) {
    //array start in 0
    let NewBinaryArray = BinaryArray.slice(firstOne + 1);

    //find the second 1 the position will be the length of the gaps
    const secondOne = NewBinaryArray.indexOf("1");

    if (secondOne > 0) {
      const gaps = [];
      gaps.push(secondOne);
    }
    //restart the loop, new array starting with 0
    return getGaps(NewBinaryArray.slice(secondOne + 1), gaps);
  }

  return console.log((gaps.length > 0)? Math.max.apply(Math, gaps) : 0);
}

function solution(N) {

  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    
    const Binary = N.toString(2).split('');
    console.log("binary result:" + Binary);

    return console.log(getGaps(Binary, []))
  }

  return 0;
}
solution (529);