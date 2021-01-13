var rl = require('readline-sync')

var laki = rl.questionInt("Jumlah laki-laki dewasa(a) : ")
var wanita = rl.questionInt("Jumlah wanita dewasa(b) : ")
var anak = rl.questionInt("Jumlah anak-anak(c) : ")
var bayi = rl.questionInt("Jumlah bayi(d) : ")

var a = laki
var b = wanita*2
var c = anak*3
var d = bayi*5

var total = a + b + c + d
console.log ("Total baju sumbangan sementara : ",total)

var tanya = rl.question("Apakah mau menambah sumbangan ? y/n  : ").toLowerCase()
if (tanya =="y"){
do {
  console.log ("Sumbagan tambahan : ")
  console.log("a = laki-laki dewasa") 
  console.log("b = wanita dewasa") 
  console.log("c = anak-anak") 
  console.log("d = bayi") 
  
  
  var tambah = rl.question("Masukkan pilihan tambahan : ")
  var jumlah =  rl.questionInt("Masukkan jumlah penambahan orang yang menerima sumbangan : ")
  if (tambah == "a"){
    total = total + (jumlah*1)
  }
  else if (tambah == "b"){
    total = total + (jumlah*2)
    wanita = wanita + jumlah
  }
  else if (tambah == "c"){
    total = total + (jumlah*3)
  }
  else if (tambah == "d"){
    total = total + (jumlah*5)
  }
  console.log ("Total sumbangan baju : ",total)

  var jawab = rl.question("Apakah mau menambah sumbangan lagi ? y/n  : ").toLowerCase()
}while(jawab == "y")
}


if (total %2 != 0 && total>10){
  total = total + wanita
  console.log ("Jika total sumbangan ganjil dan lebih 10 maka ")
  console.log ("Total baju sumbangan + "+wanita+" baju wanita masing-masing 1 adalah :", total )
}
else {
  total = total
  console.log ("total semua baju yang akan disumbangkan : ", total)
}



