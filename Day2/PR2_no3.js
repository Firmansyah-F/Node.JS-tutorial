//jawaban (a)
var rl = require('readline-sync')
var jumlah = rl.questionInt("Jumlah puntung rokok yang didapat : ")

var sisa = jumlah % 8
var hasil = (jumlah - sisa)/8

console.log('Jumlah rokok yang dirangkai : ', hasil)
console.log('Sisa puntung rokok : ', sisa)

//jawaban (b)
var penjualan = hasil*500
console.log('Uang yang didapatkan penjualan rokok : Rp.'+penjualan)