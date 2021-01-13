var rl = require("readline-sync")
var n = rl.questionInt("Input Nilai n : ")
var cetak = []
for (let i = 2; i < n; i++){
  if (i%2==1 && i%i==0){
    cetak.push(i)
  }
  else if(i == 2){
    cetak.push(i)
  }
}
console.log(cetak.join(','))