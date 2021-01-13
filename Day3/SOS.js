var rl = require("readline-sync")
var Input = rl.question("Input sinyal SOS : ")
var sos = Input.toUpperCase()

var hitbenar = 0
var hitsalah = 0
a = 0
for(i=0; i < Input.length/3 ; i++){
  if(sos.substr(a,3) =="SOS"){
    console.log("Sinyal Benar")
    a += 3
    hitbenar +=1
  }
  else {
    console.log("Sinyal Salah")
    a += 3
    hitsalah +=1
  }
}
console.log('Total Sinyal Benar : '+hitbenar)
console.log('Total Sinyal Salah : '+hitsalah)
