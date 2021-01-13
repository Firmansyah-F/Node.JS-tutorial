var rl = require('readline-sync')
var poin = 0
var modal = rl.questionInt("Masukkan Jumlah Uang anda : ")
do {
  
  var Taruhan = rl.questionInt("Masukkan Jumlah Taruhan anda: ")
  var tebak =rl.question("Tentukan Pilihan : U(diatas 5) / D(dibawah 5) ? ").toUpperCase()
  var n = 10
  var random =  Math.floor(Math.random() * Math.floor(n))
 
  if (modal >= Taruhan){
        if (tebak == "U"){

          if (random > 5){
            console.log("Angka yang Keluar : " + random )
            console.log("You Win - Mainnya Hebat")
            poin =  modal + Taruhan
            console.log("Jumlah Poin menang + modal : ",poin)
            modal = poin
          }
          else if(random <5){
            console.log("Angka yang Keluar : " + random )
            console.log("You Lose")
            poin = modal - Taruhan
            console.log("Sisa Poin Anda : ",poin)
            modal = poin
          }
          else{
            console.log("Angka yang Keluar : " + random )
            console.log("Game Seri")
            console.log("Jumlah Poin didapatkan : ",poin)
          }
        }
        else if (tebak == "D" ){
          
          if (random > 5){
            console.log("Angka yang Keluar : " + random )
            console.log("You Lose")
            poin =  modal - Taruhan
            console.log("Sisa Poin Anda : ",poin)
            modal = poin
          }
          else if(random <5){
            console.log("Angka yang Keluar : " + random )
            console.log("You Win - Mainnya Hebat")
            poin = modal + Taruhan
            console.log("Jumlah Poin + modal : ",poin)
            modal = poin
          }
          else{
            console.log("Angka yang Keluar : " + random )
            console.log("Game Seri")
            console.log("Jumlah Poin didapatkan : ",poin)
          }
        }
      }
      else if(modal < Taruhan){
        console.log("Point anda kurang Anda Kurang (GAMEOVER)")
        random = '-'
      } 
      var jawab = rl.question("Apakah mau lain lagi ? y/n  : ").toLowerCase()
}
while(jawab == "y")
  