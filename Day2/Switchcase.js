var rl = require("readline-sync")
var pilih = rl.question('Masukkan nomor pilihan anda: ')

switch(pilih){
  case '1':
    console.log(hitung())
    console.log('anda pilih no 1')
    break
  case '2':
    var c = rl.questionInt('masukkan nilai c :')
    var d = rl.questionInt('masukkan nilai d :')
    console.log(angka(c, d))
    var nilai = angka(c, d)
    console.log(nilai)
    console.log('anda pilih no 2')
    break
  default:
    console.log('pilihan anda tidak terdaftar')
    break
}
function hitung(){
  var a = 5
  var b = 4
  return a+b
}

function angka(c, d){
  return c + d
}