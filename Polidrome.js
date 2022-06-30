function solution(S) {
  let len = S.length;
  console.log(S);

  if (len == 1) {
    return S;
  }
  
  var a1 = Array.from(S)
  var result = [];
  let i = 0;
  let j = len - 1;
  let half = parseInt(j/2);


  while (j >= i) {
      if (a1[i] == a1[j] && a1[i] != "?") {
        result.push(a1[i]);
        i++;
        j--;
      } else if (a1[j] != "?" && a1[i] == "?") {
        result.push(a1[j])
        i++;
        j--;

      } else if (a1[i] != "?" && a1[j] == "?") {
        result.push(a1[i]);
        j--;
        i++;
      }
      else if (a1[j] == "?" && a1[i] == "?"){
        result.push('a');
        j--;
        i++;
      }
      else {
        S = "NON";
      }
    }

  if (len % 2 === 0 ){
    const s1 = result.join('');
    const s2 = result.reverse().join('');
    return console.log(S = s1+s2);
  } else {
    const s1 = result.join('');
    let a1 = result.pop();
    const s2 = result.reverse().join('');
    return console.log(S = s1+s2);
  }
  

}

const S = "a??bc??baa?";
solution(S);
