var rl = require('readline-sync')

var keranjang_1 = rl.questionInt("Masukkan isi keranjang 1 : ")
var keranjang_2 = rl.questionInt("Masukkan isi keranjang 2 : ")
var keranjang_3 = rl.questionInt("Masukkan isi keranjang 3 : ")
var pasar = rl.questionInt("Nomor keranjang yang dibawa kepasar : ")


var total = keranjang_1 + keranjang_2 + keranjang_3
if(pasar == 1){
  total = total - keranjang_1
}
else if (pasar == 2){
  total = total - keranjang_2
}
else{
  total = total - keranjang_3
}
console.log ("Sisa buah : ",total)
