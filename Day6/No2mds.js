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


//Modus
function modus(numbers) {
  var modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
      number = numbers[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
              modes.push(Number(i));
          }
      }

  return modes;
}

console.log("Angka yang sering muncul(Modus) adalah : ",modus(angka))

//Mean
function mean(numbers) {
  var total = 0, i;
  for (i = 0; i < numbers.length; i += 1) {
      total += parseInt(numbers[i]);
  }
  return total / numbers.length;
}

console.log("Rata-rata(Mean) : ",mean(angka))

//Median
function median(numbers) {
  var median = 0, numsLen = numbers.length;
  numbers.sort();

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else { // is odd
      // middle number only
      median = numbers[(numsLen - 1) / 2];
  }

  return median;
}

console.log("Nilai tengah(Median) adalah : ",median(angka))
