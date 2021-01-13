var rl = require('readline-sync')

console.log("Jumlah bahan-bahan untuk membuat 15 kue pukis : ")
var tepung = 125
var gula = 100
var susu = 100
var telur = 100 
console.log("Tepung terigu : "+ tepung+ " gram")
console.log("Gula pasir    : "+ gula  + " gram")
console.log("Susu murni    : "+ susu  + " gram")
console.log("putih telur   : "+ telur + " gram")

console.log("Jumlah bahan-bahan untuk membuat 1 kue pukis adalah : ")
tepung = 125/15
gula = 100/15
susu = 100/15
telur = 100 /15
console.log("Tepung terigu : "+ Math.round(tepung)+ " gram")
console.log("Gula pasir    : "+ Math.round(gula)  + " gram")
console.log("Susu murni    : "+ Math.round(susu)  + " gram")
console.log("putih telur   : "+ Math.round(telur) + " gram")

var kukis = rl.questionInt("Jumlah kue yang ingin dibuat : ")
tepung *= kukis
gula *= kukis
susu *= kukis
telur *= kukis
console.log("Jumlah bahan-bahan untuk membuat "+ kukis + " kue pukis adalah : ")
console.log("Tepung terigu : "+ Math.round(tepung)+ " gram")
console.log("Gula pasir    : "+ Math.round(gula)  + " gram")
console.log("Susu murni    : "+ Math.round(susu)  + " gram")
console.log("putih telur   : "+ Math.round(telur) + " gram")