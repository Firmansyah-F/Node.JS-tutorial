// Variabel dan Input
var rl = require("readline-sync")

var angka = rl.question("Silahkan Masukkan Angka = ")
console.log(angka);

var a = rl.question("Masukkan nilai a = ")
var b = rl.question("Masukkan nilai a = ")

var c = parseInt(a) + parseInt(b);
console.log("Nilai C1 =  " + c)

c += parseInt(angka)
console.log("Nilai C2 =  " + c)
