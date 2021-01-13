var rl = require('readline-sync')
var mulai = rl.question("Batch 235 memulai kelas pada tanggal (yyyy:mm:dd): ")
var tgllibur = rl.question("masukkan tanggal libur= ").split(',')
var lama = rl.questionInt("Bootcamp berlangsung selama=")
var tambahhari = 0
var date = new Date(mulai)

for (let i = 1; i <= lama + tambahhari; i++){
    date.setDate(date.getDate()+1)
    var hari = date.getDay() 
    var tanggal = date.getDate()

    if (hari == 0 || hari == 6){
        tambahhari++
    }else {
        if (tgllibur.includes(tanggal.toString())) {
            tambahhari++
        }
        }
    }
console.log("tambahan hari bootcamp=" + tambahhari)
console.log("Hari terakhir bootcamp= " + date)