var rl = require('readline-sync')

var inp = rl.question("Masukkan kata : ").split('')
var alphabet    = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
var splitAlph   = alphabet.split(',')

var cekHuruf = 0

    for (let i = 0; i < inp.length; i++) {
            if (splitAlph.includes(inp[i])) {
                cekHuruf += 1
            }
    }

console.log("Jumlah kata : ", cekHuruf)