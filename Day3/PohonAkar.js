var rl = require("readline-sync")
var angka = rl.questionInt("Input angka  : ")
//var n = rl.questionInt("Input batas bil prima  : ")
var x = 0

function prima (n){
    var cetak = []
for (let i = 2; i < n; i++){
  if (i%2==1 && i%i==0){
    cetak.push(i)
  }
  else if(i == 2){
    cetak.push(i)
  }
}
console.log(cetak)
}


for(i=0; i<angka; i++){
    if (angka%2 == 0){
        x = angka/2
        console.log(angka+'/2 = ', x)
        angka = x
    }
    else if (angka%3 == 0){
        x = angka/3
        console.log(angka+'/3 = ',x)
        angka = x
    }
    else if (angka%5 == 0){
      x = angka/5
      console.log(angka+'/5 = ',x)
      angka = x
    
    }
    else if(angka%angka==0){
      x = angka/angka
      console.log(angka+'/'+ angka + ' = ',x)
      angka = x
    }
}