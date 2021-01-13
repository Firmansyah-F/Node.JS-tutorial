var rl = require('readline-sync')

var siswa = rl.question("Jumlah siswa : ")
var object = rl.questionInt("Jumlah posisi : ")

function faktorial(k){
	var angka=1;
	var faktor=1;
	 while(angka<=k){
		 faktor=faktor*angka;
		 angka=angka+1;
	 }
	 return faktor
}
faktorial(siswa)


var bot = siswa - object

function faktorial(k){
	var angka=1;
	var faktor=1;
	 while(angka<=k){
		 faktor=faktor*angka;
		 angka=angka+1;
	 }
	 return faktor
}
faktorial(bot)

var hasil = faktorial(siswa)/faktorial(bot)
console.log("Banyak cara pemilihan : ",hasil)