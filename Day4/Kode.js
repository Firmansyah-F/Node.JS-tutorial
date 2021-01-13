var rl = require('readline-sync')

var input = rl.question('Inputkan kalimat : ')
var rot = rl.questionInt('Rotasi : ') // 2
var alphabet = 'abcdefghijklmnopqrstuvwxyz' 

var baru = alphabet.substr(rot,alphabet.length)
var output = []

for(let j=0; j < rot; j++)
{
   var a = alphabet[j] //var a untuk menampung alphabet yang dirotasi
   //console.log (a) = untuk nampilin huruf mana yang dirotasi
   baru += a
}

// alphabet = abcdefghijklmnopqrstuvwxyz 
// baru = cdefghijklmnopqrstuvwxyzab

// input = middle-Outz

for(let i=0; i<input.length; i++)
{
        // var huruf = input[i].toLowerCase()
        if(alphabet.includes(input[i]))
        {   
            b = alphabet.indexOf(input[i]) //b digunakan untuk mengetahui index dari alphabet yang di inputkan
            //console.log(b)
            output.push(baru[b])
        }
        else if( (alphabet.toUpperCase()).includes(input[i]) )
        {
            c = (alphabet.toUpperCase()).indexOf(input[i]) // c digunakan untuk mengetahui index dari input yang uppercase
            output.push(baru[c].toUpperCase())
        }
        else
        {
            output.push(input[i])
        }

}

console.log(output.join(''))