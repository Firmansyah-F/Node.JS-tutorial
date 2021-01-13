var rl = require("readline-sync")
var n = rl.questionInt("Input Nilai n : ")
var a = 1
var b = 1
var c = 0
var cetak = []
for (i =0; i < n; i++){
  if(i<2){
    cetak[i] += a
  }
  else{
    c = a + b
  cetak[i] += c
  a = b
  b = c
  }
}
console.log(cetak)