function isLetter(char){
  return ( (char >= 'A' &&  char <= 'Z') ||
           (char >= 'a' &&  char <= 'z') );
}    

function reverseSpecialString(string){
  let str = string.split('');
  let i = 0;
  let j = str.length-1;
  while(i<j){
      if(!isLetter(str[i])){
          ++i;
      }
      if(!isLetter(str[j])){
          --j;
      }
      if(isLetter(str[i]) && isLetter(str[j])){
          var tempChar = str[i];
          str[i] = str[j];
          str[j] = tempChar;
          ++i;
          --j;
      }
  }
  return str.join('');
}

document.write(reverseSpecialString("Ab,c,de!$"));