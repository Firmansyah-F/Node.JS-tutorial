var rl = require('readline-sync')
var input = rl.question("Masukkan jam datang ((Jam:Menit)): ")
var output = rl.question("Masukkan Jam pulang ((Jam:Menit)): ")
var datang = input.split(':')
var pulang = output.split(':')

var now = new Date(2019, 7, 20, datang[0], datang[1], 00)
var out = new Date(2019, 7, 20, pulang[0], pulang[1], 00)

var time = out - now
var selisihjam = time / (60 * 60 * 1000)
console.log('Lama Parkir : '+ Math.ceil(selisihjam)+ ' jam')
selisihjam = Math.ceil(selisihjam)
var parkir = selisihjam*3000
console.log('Total Biaya Parkir : Rp.'+parkir)