function firstNotRepeatingCharacter(words){

  const charMap = {};
  for(var i = 0; i < words.length; i++) {
    if (charMap.hasOwnProperty(words.charAt(i))) {
      charMap[words.charAt(i)] += 1;
    } else {
      charMap[words.charAt(i)] = 1;
    }
  };

  var answer = "_";
  for(var i = 0; i < words.length; i++) {
    if (charMap[words.charAt(i)] == 1) {
      answer = words.charAt(i);
      break;
    }
  };
  return answer;
}

console.log(firstNotRepeatingCharacter("abacabad"));
