var rl = require('readline-sync');

var Kalimat = rl.question("Massukkan Kalimat = ");
Kalimat = Kalimat.toLowerCase();
var arrkalimat = Kalimat.split(' ');
var arrBalik = [];


for (let x = 0; x < arrkalimat.length; x++) {
    var kata = arrkalimat[x].split('');
    var a = kata.length - 1;
    var kalimatbalik = "";
    for (let i = 0; i < kata.length; i++) {
        arrBalik[a] = kata[i];
        a--;
    }

    for (let j = 0; j < arrBalik.length; j++) {
        kalimatbalik += arrBalik[j];
    }
    
    console.log(kalimatbalik);
    if (arrkalimat[x] == kalimatbalik) {
        console.log("YES");
    } else {
        console.log("NO");
    }

}