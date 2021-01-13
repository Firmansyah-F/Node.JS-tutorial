var rl = require('readline-sync')
var input = rl.question('Input : ')
var array = input.split(' ')
console.log(array)

var tinggi = Math.max(parseInt(array))
console.log('lilin tertinggi : lilin ' + tinggi)

var s = 0
for(i=0; i<array.length; i++){
    if(array[i].includes(tinggi.toString())){
        s += 1
    }
}

console.log('Lilin yang berhasil di tiup : ' + s + ' lilin')
