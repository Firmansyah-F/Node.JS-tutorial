var rl = require('readline-sync')

var kata = rl.question("Masukkan kata : ")

function isPangram(string){
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let alphaObj = {};
  let allLetters;
  for (let i = 0; i < alpha.length; i++) {
      alphaObj[alpha.charAt(i)] = 0;
  }
 
  let condense = string.replace(/\s/g, '').split(",").toString()
  for (let i = 0; i < condense.length; i++) {
      if (alphaObj.hasOwnProperty(condense.charAt(i).toLowerCase())) {
          alphaObj[condense.charAt(i).toLowerCase()] += 1;
      }
  }
 
  for (let item in alphaObj) {
      if (alphaObj[item] > 0) {
          allLetters = true;
      } else {
          allLetters = false;
          break;
      }
  }
  return allLetters;
}
console.log(isPangram(kata))