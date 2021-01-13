var rl = require("readline-sync")

var belanja = rl.question("Silahkan Jumlah Belanja = ");
var ongkir = rl.question("Silahkan Jumlah ongkir = ");
belanja = parseInt(belanja)
ongkir = parseInt(ongkir)

if (belanja >= 100000){
  Diskon_Onkir = 10000
  Diskon_belanja = 20000
}
else if(belanja >= 50000){
  Diskon_Onkir = 10000
  Diskon_belanja = 10000
}
else if (belanja >= 30000){
  Diskon_Onkir = 5000
  Diskon_belanja = 5000
}
else {
  console.log("Anda tidak mendapatkan promo")
}
total = (belanja + ongkir) - (Diskon_belanja + Diskon_Onkir) 
console.log("Belanja", belanja)
console.log("Ongkos kirim",ongkir)
console.log("Diskon Ongkir", Diskon_Onkir)
console.log("Diskon Belanja", Diskon_belanja)
console.log("Total Belanja", total)