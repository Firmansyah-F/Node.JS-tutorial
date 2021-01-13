var rl = require('readline-sync')

var input = rl.question('Masukkan Password : ')
var level = 0;
switch(true){
    case /^(?:([A-Z])*){8,12}$/.test(input):
    level = 1;
    break;

    case /^(?:([A-Z])*([a-z])*){8,12}$/.test(input):
    level = 2;
    break;

    case /^(?:([A-Z])*([a-z])*(\d)*){8,12}$/.test(input):
    level = 3;
    break;

    case /^(?:([A-Z])*([a-z])*(\d)*(\W)*){8,12}$/.test(input):
    level = 4;
    break;
}
