var rl = require('readline-sync')

var angka = rl.question("Jumlah orang yang akan duduk : ")

function faktorial(k){
	var angka=1;
	var faktor=1;
	 while(angka<=k){
		 faktor=faktor*angka;
		 angka=angka+1;
	 }
	 console.log("Jumlah cara duduk : ",faktor)
}
faktorial(angka)