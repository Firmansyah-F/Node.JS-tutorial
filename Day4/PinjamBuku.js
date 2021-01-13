var rl = require('readline-sync')
var input = rl.question("Masukkan Tanggal Peminjaman(yyyy:mm:dd): ")
var output = rl.question("Masukkan Tanggal Peminjaman(yyyy:mm:dd): ")
var pinjam = input.split(':')
var balik = output.split(':')

var now = new Date  (pinjam[0], pinjam[1]-1, pinjam[2])
var out = new Date  (balik[0], balik[1]-1, balik[2]-3)

var date = out - now
console.log(date)
var miliday = 24 * 60 * 60 * 1000
var selisihtgl = date / miliday
console.log("Jumlah Hari Telat Pengembalian Buku : "+selisihtgl)
var denda = selisihtgl*500
console.log("Total denda yang harus dibayar : Rp."+denda)

