var rl = require('readline-sync')
var inp         = rl.question("Masukkan Password = ").toLowerCase().split('')

var alphabet    = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
var splitAlph   = alphabet.split(',')

var cekHuruf = 0
    for (let i = 0; i < inp.length; i++) {
            if (inp[i].includes(splitAlph)) {
                cekHuruf += 1
            }
    }
if (cekHuruf == 26) {   
    console.log("Kalimat ini adalah Pangram")
}else{
    console.log("Kalimat ini bukan Pangram")
}