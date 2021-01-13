var rl = require("readline-sync")
var pilih = rl.question('Masukkan Nomor Soal Pilihan Anda: ')
var batas = rl.questionInt('Masukkan Batas Deret (n1) : ')
var n2 = rl.questionInt('Masukkan faktor pengali (n2) : ')
var cetak1 = ''
var cetak2 = ''

switch(pilih){
  case '1':
    var x = 0
    var y = 1
    for (let i=0; i < batas; i++){
      cetak1 += x + ' '
      x += 1
    }
    for (let j = 0; j < batas; j++){
      cetak2 += y + ' '
      y *= n2
    }
    console.log(cetak1)
    console.log(cetak2)
    break

  case '2':
    var x = 0
    var y = 1
    for (let i=0; i < batas; i++){
      cetak1 += x + ' '
      x += 1
    }
    for (let j=0; j < batas; j++){
      if (j%3 != 0){
        cetak2 += '-'+ y + ' '
        y *= n2
      }
      else {
        cetak2 += y + ' '
        y *= n2
      }
    console.log(cetak1)
    console.log(cetak2)
    break
    }
}