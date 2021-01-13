var r1 = require('readline-sync');

var kalimat =r1.question('Masukan kalimat anda : ');
var array = kalimat.split(' ');
var kata = [];
for(let i=0; i<array.length; i++){
    kata=array[i].split('');
    var gabung = '';
    for (let j=0; j<kata.length; j++){
        if(j!=0 && j!=(kata.length-1)){
            kata[j]='*';
        }
    }
    for (let k = 0; k<kata.length; k++){
        gabung +=kata[k];
    }
    array[i]=gabung;
}
console.log(array);