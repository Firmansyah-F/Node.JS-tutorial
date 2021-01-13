var rl = require("readline-sync")

var pulsa = rl.question("Jumlah pulsa yang akan di isi = ");
pulsa = parseInt(pulsa)
var point = 0;

if (pulsa <= 10000){
    point == 0
}
else if (pulsa >= 10000 && pulsa <= 30000){
    point = (pulsa-10000)/1000
}
else if (pulsa >= 30000){
    point = ((pulsa-30000)/1000)*2 + 20 
}
console.log("Jumlah point : ", point)
