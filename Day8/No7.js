var rl = require('readline-sync')
var inp         = rl.question("Masukkan Kata  = ").toLowerCase().split(' ')
var masukan = inp.join('')
var alphabet    = "abcdefghijklmnopqrstuvwxyz"

var cekHuruf = 0
    for (let i = 0; i < masukan.length; i++) {
            if (masukan.includes(alphabet[i])) {
                cekHuruf += 1
            }
    }
if (cekHuruf == 26) {   
    console.log("Kalimat ini adalah Pangram")
}else{
    console.log("Kalimat ini bukan Pangram")
}