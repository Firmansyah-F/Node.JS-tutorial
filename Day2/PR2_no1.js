var rl = require('readline-sync');

var uang =rl.question('Masukan jumlah uang anda : ');
var baju = [35,40,50,20]
var celana = [40,30,45,10]
var hasil = []
for (i=0; i<baju.length; i++){
  for(j=0; j<celana.length; j++){
      var total = baju[i]+celana[j]
    if(total <= uang){
        hasil.push(total)
    }
    else {
        console.log("Total belanja : "+ total + " =>> uang anda tidak cukup")
    }
  }
}
console.log("List Total belanja sesuai jumlah uang : " + hasil)
        
for(var k=0;k<hasil.length;k++){    
    if(k == 0){ 
        var hasil_max = hasil[k];
    }
    else{
        if(hasil[i] > hasil_max){
            hasil_max = hasil[i];
        }
    }              
}  
console.log('Total belanja Recomended = ' + hasil_max)