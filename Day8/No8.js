var rl = require('readline-sync')
var input = [[],[],[]]
var cetak = ''

for (let i=0; i<3 ; i++){
  for (let j=0; j<3; j++){
    input[i][j] = rl.questionInt('Input (' + i +',' + j + ') : ')
    cetak += input[i][j] + ' '
  }
}


var diagonal1 = 0 
var diagonal2 = 0

for (let i=0; i<3; i++){
  diagonal1 += input[i][i]
}

for (let j=0; j<3; j++){
  diagonal2 += input[2-j][j]
}

console.log("Penjumlahan diagonal 1 : ",diagonal1)
console.log("Penjumlahan diagonal 2 :  ",diagonal2)

var hasil = diagonal1 - diagonal2
console.log("Selisih nilai diagonal 1 dan 2 adalah : " + hasil)