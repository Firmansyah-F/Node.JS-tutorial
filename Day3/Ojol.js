var rl = require("readline-sync")
var Input = rl.question("Masukkan angka tujuan ojol  : ")
var customer = Input.split(' ')
var jarak = 0
for (let i=0; i < customer.length; i++){
  if (customer[i]==1){
    jarak +=2
  }
  else if (customer[i]==2){
    jarak += 0.5
  }
  else if (customer[i]==3){
    jarak += 1.5
  }
  else if (customer[i]==4){
    jarak += 0.3
  }
}
var bensin = Math.ceil(jarak/2.5)
console.log("Jarak Tempuh : ", jarak )
console.log("Bensin yang dihabiskan : "+ bensin +' Liter')