var rl = require("readline-sync")

var pilih = rl.question('Masukkan Nomor Soal Pilihan Anda: ')
var n= rl.questionInt('Masukkan Batas Deret (n) : ')
var n2 = rl.questionInt('Masukkan batas Deret 2 (n1) : ')

var cetak = ''
var angka = 1
switch(pilih){
  case '1':
    for (let i = 0; i <n2; i++){
      for(let j=0; j <n; j++ ){
        if (i == 0){
          cetak += j + ' '
        }
        else {
          cetak += angka + ' '
          angka *= 3
        }
      } 
      cetak += '\n'
    }
    console.log(cetak)
    break
  
  case '2':
    for (let i = 0; i <n2; i++){
      for(let j=0; j <n; j++ ){
        if (i == 0){
          cetak += j + ' '
        } 
        else if (j == 3) {
          cetak += '-' + angka + ''
          angka *=3
        }
        else {
          cetak += angka + ' '
          angka *= 3
        }
      } 
      cetak += '\n'
    }
    console.log(cetak)
    break
}