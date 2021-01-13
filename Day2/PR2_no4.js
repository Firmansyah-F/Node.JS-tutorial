var rl = require('readline-sync')
var uangelsa = rl.questionInt("Jumlah uang Elsa : ")
var alergi = rl.questionInt("Nomor menu alergi : ")
var total = 0
var menu= [12000,20000,9000,15000]
for(i=0; i<menu.length; i++){
  total = total + menu[i]
}
var elsa = (total-menu[alergi])
var bayar = elsa/2
var sisa = uangelsa - bayar

console.log("Total Makan Dimas & Elsa : ", total)
console.log("Makanan yang bisa Elsa Makan : ", elsa)
console.log("Elsa harus membayar : ",bayar)

if(sisa < 0){
  console.log("Uang anda kurang : ",sisa)
}
else if(sisa == 0){
  console.log("Uang anda pas : ",sisa)
}
else{
  console.log("Sisa Kembalian : ",sisa)
}
var dimas = total - bayar
console.log("Harga yang dibayar dimas : " +dimas )