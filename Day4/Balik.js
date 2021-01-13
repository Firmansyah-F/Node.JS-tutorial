var rl = require('readline-sync')

var Kalimat = rl.question("Massukkan Kalimat = ")
Kalimat = Kalimat.toLowerCase()
var arrkalimat = Kalimat.split('')
console.log(arrkalimat);
var a = arrkalimat.toString()

var balik = arrkalimat.reverse()
console.log(balik);
var b = balik.toString()
console.log(a)
console.log(b)
if (a == b) {
        console.log("YES =>> kalimat bisa di balik")
    } else {
        console.log("NO =>> kalimat tidak bisa dibalik")}