var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//Salário com Bônus
var nomeVendedor = String(lines[0]);

var salario = parseFloat(lines[1]);

var totalVendas = parseFloat(lines[2]);

const percentual = 0.15; 

total = (salario + percentual * totalVendas)

console.log(`TOTAL = R$ ${total.toFixed(2)}`)