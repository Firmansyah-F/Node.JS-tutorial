var rl = require("readline-sync")
var n = rl.questionInt("Input Nilai n : ")
var a = 1
var b = 1
var c = 1
var d = 0
var cetak = ''
for (i =0; i < n; i++){
  if(i<3){
    cetak += a +','
  }
  else{
    d = a + b + c
  cetak += d + ','
  a = b
  b = c
  c = d
  }
}
console.log(cetak)