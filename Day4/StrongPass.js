var rl = require('readline-sync')

var input = rl.question('Masukkan Password : ')
var pass = input.split('')
console.log(pass)

var numb = "0123456789"
var lower= "abcdefghijklmnopqrstuvwxyz"
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special= "!@#$%^&*()-+"

var numbers = numb.split('')
var lower_case = lower.split('')
var upper_case = upper.split('')
var special_characters = special.split('')

var all = numbers.concat(lower_case,upper_case,special_characters)
console.log(all)

for (i=0; i<= input.length-1; i++){
    if(all.includes(pass[i])&&input.length>=6){   
        console.log("password strong")
    } else{
        console.log("password low")
    }
}
    



// for(let j=0; j < rot; j++)
// {
//    var a = alphabet[j] //var a untuk menampung alphabet yang dirotasi
//    //console.log (a) = untuk nampilin huruf mana yang dirotasi
//    baru += a
// }

// for(let i=0; i<input.length; i++)
// {
//         // var huruf = input[i].toLowerCase()
//         if(alphabet.includes(input[i]))
//         {   
//             b = alphabet.indexOf(input[i]) //b digunakan untuk mengetahui index dari alphabet yang di inputkan
//             //console.log(b)
//             output.push(baru[b])
//         }
//         else if( (alphabet.toUpperCase()).includes(input[i]) )
//         {
//             c = (alphabet.toUpperCase()).indexOf(input[i]) // c digunakan untuk mengetahui index dari input yang uppercase
//             output.push(baru[c].toUpperCase())
//         }
//         else
//         {
//             output.push(input[i])
//         }

// }

// console.log(output.join(''))