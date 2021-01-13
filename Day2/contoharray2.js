var r1 = require('readline-sync');

var kalimat =r1.question('Masukan kalimat anda : ');
var array = kalimat.split(' ');
console.log(array)
var cetak = ' '

for (i=0; i<array.length; i++){
  var kata = array[i]
  for(j=0; j<kata.length; j++){
    if((j==0) || (j==kata.length-1)){
      cetak +='*'
    }
    else {
      cetak += kata[j]
    }
  }
  cetak += ' '
}
console.log(cetak)