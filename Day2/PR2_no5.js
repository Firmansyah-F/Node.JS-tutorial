var rl = require('readline-sync');
var kata =rl.question("Masukkan kata : ")
var vokal = []
var konsonan = []
var i = 0
while (i < kata.length){
    if (kata[i] == 'a' || kata[i] == 'A' || kata[i] == 'u' || kata[i] == 'U' || kata[i] == 'i'
    || kata[i] == 'I' || kata[i] == 'e' || kata[i] == 'E' || kata[i] == 'o' || kata[i] == 'O' ){
        vokal.push(kata[i])
    }
    else if (kata[i] != ' '){
        konsonan.push(kata[i]) 
    } 
    i += 1
}
console.log(vokal.sort())
console.log(konsonan.sort())
var lv = vokal.toString()
var lk = konsonan.toString()
console.log ('List Vokal :', lv.toLowerCase())
console.log ('List Konsonan: ', lk.toLowerCase())
