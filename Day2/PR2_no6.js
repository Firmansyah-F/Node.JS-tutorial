//Soal No 6

var rl = require('readline-sync');

var kalimat =rl.question('Masukan kalimat anda : ');
var array = kalimat.split(' ');
console.log(array)
var cetak = ' '

for (i=0; i<array.length; i++){
  var kata = array[i]
  for(j=0; j<kata.length; j++){
    if((j==0) || (j%2 ==0)){
        cetak += kata[j]
    }
    else {
        cetak +='*'
    }
  }
  cetak += ' '
}
console.log(cetak)