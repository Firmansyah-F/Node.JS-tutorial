var rl = require("readline-sync")
var pilih = rl.question('Masukkan Nomor Soal Pilihan Anda: ')
var batas = rl.questionInt('Masukkan Batas Deret : ')
var cetak = ''

//Dim (1) Practice

switch(pilih){
  case '1':
    var x = 1
    for (let i = 0; i <= batas; i++){
      cetak += x + ' '
      x += 2
    }
    console.log(cetak)
    break

  case '2':
    var x = 2
    for (let i = 0; i <= batas; i++){
      cetak += x + ' '
      x += 2
    }
    console.log(cetak)
    break

  case '3':
    var x = 1
    for (let i = 0; i <= batas; i++){
      cetak += x + ' '
      x += 3
    }
    console.log(cetak)
    break

  case '4':
    var x = 1
    for (let i = 0; i <= batas; i++){
       cetak += x + ' '
      x += 4
    }
    console.log(cetak)
    break
  
  case '5':
    var x = 1
    for (let i = 1; i <= batas; i++){
      if (i%3 != 0){
        cetak += x + ' '
        x += 4
      }
      else {
        cetak += "* "
      }
    }
     console.log(cetak)
    break
    
  case '6':
    var x = 1
    for (let i = 1; i <= batas; i++){
       if (i%3 != 0){
        cetak += x + ' '
        x += 4
      }
      else {
        cetak += "* "
        x += 4
       }
     }
       console.log(cetak)
      break 
  
  case '7':
    var x = 2
    for (let i = 0; i <= batas; i++){
       cetak += x + ' '
       x *= 2
    }
    console.log(cetak)
    break

  case '8':
    var x = 3
    for (let i = 0; i <= batas; i++){
       cetak += x + ' '
       x *= 3
    }
    console.log(cetak)
    break

  case '9':
    var x = 4
    for (let i = 1; i <= batas; i++){
      if (i%3 != 0){
        cetak += x + ' '
        x *= 4
      }
      else {
        cetak += "* "
      }
    }
      console.log(cetak)
      break    

  case '10':
    var x = 3
    for (let i = 1; i <= batas; i++){
      if (i%4 != 0){
        cetak += x + ' '
        x *= 3
      }
      else {
        cetak += "XXX "
        x *= 3
      }
    }
      console.log(cetak)
      break  
}