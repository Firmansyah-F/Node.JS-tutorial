var rl = require('readline-sync')

var angka = rl.question("masukkan angka: ").split('')
var kali = rl.question("masukkan pengali: ").split()
console.log(angka)

var a = 0;
for(let i=0;i<angka.length;i++){
  a += parseInt(angka[i])
}
console.log("hasil penjumlahan : "+a)
a *= kali
console.log("Hasil penjumlahan dan dikali "+kali+" adalaah =  "+a)

a = a.toString()
var sum = a.split('')
console.log(sum)
 

var b = 0;
for(let i=0;i<sum.length;i++){
  b += parseInt(sum[i])
}
console.log("Penjumlahan = "+b)


b = b.toString()
var jum = b.split('')
console.log(jum)
 

var c = 0;
for(let i=0;i<sum.length;i++){
  c += parseInt(jum[i])
}
console.log("Penjumlahan Akhir = "+c)