var rl = require('readline-sync')
var array = rl.question("Masukkan Deret : ")
var jumlah_rotasi = rl.questionInt("Masukkan jumlah rotasi : ")
var b = jumlah_rotasi*-1
var deret = array.split(',') 
function rotasiArray(deret, jumlah_rotasi) {
    if (jumlah_rotasi >= 0) {
      var potong = deret.splice(b, jumlah_rotasi);
      var output = [...potong,...deret];
      return output;
    } 
    else {
      return "Format Salah";
    }
  }
console.log("rotasi " + jumlah_rotasi + 'x = ' , rotasiArray(deret,jumlah_rotasi))