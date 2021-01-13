var rl = require('readline-sync')

var input = rl.question("masukkan password: ")
var pass = input.split('')
var cetak = 0;
var output = 'kurang'

var numb = "0123456789"
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()-+"

var numbers = numb.split('')
var lower_case = lower.split('')
var upper_case = upper.split('')
var special_characters = special.split('')
console.log(pass)
console.log(numbers)
var all = numbers.concat(lower_case,upper_case,special_characters)
for(i=0; i<pass.length;i++)
  if (pass.length >= 6) {
      if(lower_case.includes(pass[i])) {
          cetak += 1
          output+= 'huruf kecil'
      }
      else if(upper_case.includes(pass[i])) {
          cetak += 1
          output+= 'huruf besar'
      } 
      else if(numbers.includes(pass[i])) {
          cetak += 1
          output+= 'angka'
      }
      else if(special_characters.includes(pass[i])) {
          cetak += 1
          output+= 'simbol'
      } else {
          console.log ('minimal 6 karakter')
      }
  }
    console.log (cetak)
    console.log (output)
// if (password.length >= 6) {
//     if(password.match(/[a-z]+/) ==null) {
//         cetak += 1
//         output+= 'huruf kecil'
//     }
//     else if(password.match(/[A-Z]+/) ==null) {
//         cetak += 1
//         output+= 'huruf besar'
//     } 
//     else if(password.match(/[0-9]+/) ==null) {
//         cetak += 1
//         output+= 'angka'
//     }
//     else if(password.match(/[!@#$%^&*]+/) ==null) {
//         cetak += 1
//         output+= 'simbol'
//     } else {
//         console.log ('minimal 6 karakter')
//     }
// }
// console.log (cetak)
// console.log (output)