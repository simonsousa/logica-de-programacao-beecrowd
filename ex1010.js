var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\r|\n/)
//CALCULO SIMPLES
lines = lines.filter(lines => lines[0],lines[2])

Texto1 = lines.shift()
Texto2 = lines.shift()

linhadeValores1 = Texto1.split(' ').map(Number);
linhadeValores2 = Texto2.split(' ').map(Number);

codpeca = linhadeValores1[0]
qtd = linhadeValores1[1]
preco = linhadeValores1[2]

codpeca2 = linhadeValores2[0]
qtd2 = linhadeValores2[1]
preco2 = linhadeValores2[2]

total = (qtd * preco + qtd2 * preco2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
