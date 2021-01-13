var rl = require("readline-sync")

var belanja = rl.question("Silahkan Jumlah Belanja = ");
var jarak = rl.question("Total Jarak = ");
var promo = rl.question("Masukkan Kode Promo (Jika Belanja Bersar dari 30k) = ").toUpperCase();

var diskon = 40 * belanja / 100;
var hasil = belanja - diskon
var ongkir = 5000

if (jarak >= 5) {
  for (var i = 5; i < jarak; i++) {
    ongkir += 1000
  }
}
var Total = hasil + ongkir

if (promo == "JKTOVO") {
  if (belanja >= 30000) {
    if (diskon >= 30000) {
      diskon = 30000
    }
    console.log("Belanja : ", belanja)
    console.log("Diskon 40% : ", diskon)
    console.log("Ongkir : ", ongkir)
    console.log("Total Belanja : ", Total)
  }
  else{
    console.log("Belanja kurang dari 30000")
    console.log("Belanja : ", belanja)
    console.log("Diskon 40% : ", 0)
    console.log("Ongkir : ", ongkir)
    console.log("Total Belanja : ", Total)
  }
} else {
  console.log("Kode Vocher anda salah atau Voucher tidak valid")
  console.log("Belanja : ", belanja)
  console.log("Diskon 40% : ", 0)
  console.log("Ongkir : ", ongkir)
  console.log("Total Belanja : ", Total)
}

