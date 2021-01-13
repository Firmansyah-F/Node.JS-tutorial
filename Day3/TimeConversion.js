var rl = require("readline-sync")
var time = rl.question("Input format waktu : ")

var jam = time.substr(0,(time.length-2))
var ket = time.substr(-2)
ket = ket.toUpperCase()
//console.log(jam)
//console.log(ket)
var waktu = jam.split(':')
var pm = 'PM'
    
if (pm.includes(ket)){
    waktu[0] = parseInt(waktu[0]) + 12
    console.log('Conversi Jam : ',waktu.join(':'))
}
else{
    console.log('Conversi Jam : ',jam)
}

