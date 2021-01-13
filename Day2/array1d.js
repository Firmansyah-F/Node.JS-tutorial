var rl = require('readline-sync')
var kalimat = rl.question('Masukkan kalimat = ')

var array = kalimat.split(' ');
console.log(array)

for(let i=0 ; i< array.length; i++){
  console.log('data array ke ' + i + ' = ' + array[i])
} 