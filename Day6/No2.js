var rl = require('readline-sync')

var angka = rl.question("masukkan deret: ").split(',')
console.log("Sebelum Diurutkan : ",angka)


while(j != 0){
  var j = 0
  var simpan = 0
  for (let i=0; i<angka.length;i++){
    if(parseInt(angka[i])>parseInt(angka[i+1])){
      simpan = parseInt(angka[i])
      angka[i] = parseInt(angka[i+1])
      angka[i+1] = parseInt(simpan)
    j++
    }
  }
}
console.log("Setelah Diurutkan : ",angka.join(','))

var a = 0;
for(let i=0;i<3;i++){
  a += parseInt(angka[i]);
}
console.log("Total Penjumlahan 3 angka terkecil "+a)

var b = 0;
for(let j=(angka.length-1);j>=angka.length-3;--j){
  b += parseInt(angka[j]);
}
console.log("Total Penjumlahan 3 angka terbesar: "+b)