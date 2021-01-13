var rl = require('readline-sync')

var password = rl.question("masukkan password: ")
var cetak = 0;
var output = 'kurang'

if (password.length >= 6) {
    if(password.match(/[a-z]+/) ==null) {
        cetak += 1
        output+= 'huruf kecil'
    }
    else if(password.match(/[A-Z]+/) ==null) {
        cetak += 1
        output+= 'huruf besar'
    } 
    else if(password.match(/[0-9]+/) ==null) {
        cetak += 1
        output+= 'angka'
    }
    else if(password.match(/[!@#$%^&*]+/) ==null) {
        cetak += 1
        output+= 'simbol'
    } else {
        console.log ('minimal 6 karakter')
    }
}
console.log (cetak)
console.log (output)