var rl = require("readline-sync")

var pulsa = rl.question("Silahkan Masukkan jumlah pulsa = ");
var point = "";
  if(pulsa >= 100000) point = "800"
  else if (pulsa >= 50000)  point = "400"
  else if (pulsa >= 25000) point = "200"
  else if (pulsa >= 10000) point = "80"
  else point = "0"
  
  console.log("Point Anda : ", point)