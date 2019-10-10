const countArrayOcurrences = (letters, letterToCompoare) => {
  return letters.filter(letter => letter === letterToCompoare).length
}

const scramble = (str1, str2) => {
  str2 = str2.split("")
  str1 = str1.split("")
    
  for (let i = 0; i < str2.length; i++) {
    if (countArrayOcurrences(str2, str2[i]) > countArrayOcurrences(str1, str2[i])) {
      return false
    }
  }

  return true
}

console.log(scramble('rkqodlw','world'),true);
console.log(scramble('cedewaraaossoqqyt','codewars'),true);
console.log(scramble('katas','steak'),false);
console.log(scramble('scriptjava','javascript'),true);
console.log(scramble('scriptingjava','javascript'),true);
console.log(scramble('scriptsjava','javascripts'),true);
console.log(scramble('jscripts','javascript'),false);
console.log(scramble('aabbcamaomsccdd','commas'),true);
