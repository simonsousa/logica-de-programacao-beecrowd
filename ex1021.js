var input = require('fs').readFileSync('stdin','utf8');
let valor = Number(input);//Notas e Moedas
//notas = 100, 50, 20, 10, 5, 2, 1 
//moedas = (0.50, 0.25, 0.10, 0.05, 0.01) multiplicados por 100, para o programa não dar erro
console.log('NOTAS:')
let resultado = Math.trunc(valor/100);
console.log(`${resultado} nota(s) de R$ 100.00`)
valor%=100;
resultado = Math.trunc(valor/50);
console.log(`${resultado} nota(s) de R$ 50.00`)
valor%=50;
resultado = Math.trunc(valor/20);
console.log(`${resultado} nota(s) de R$ 20.00`);
valor%=20;
resultado = Math.trunc(valor/10);
console.log(`${resultado} nota(s) de R$ 10.00`);
valor%=10;
resultado = Math.trunc(valor/5);
console.log(`${resultado} nota(s) de R$ 5.00`);
valor%=5;
resultado = Math.trunc(valor/2);
console.log(`${resultado} nota(s) de R$ 2.00`);
valor%=2;
valor = valor * 100;
console.log('MOEDAS:');
resultado = Math.trunc(valor/100);
console.log(`${resultado} moeda(s) de R$ 1.00`);
valor%=100;
resultado = Math.trunc(valor/50);
console.log(`${resultado} moeda(s) de R$ 0.50`);
valor%=50;
resultado = Math.trunc(valor/25);
console.log(`${resultado} moeda(s) de R$ 0.25`);
valor%=25;
resultado = Math.trunc(valor/10);
console.log(`${resultado} moeda(s) de R$ 0.10`);
valor%=10;
resultado = Math.trunc(valor/5);
console.log(`${resultado} moeda(s) de R$ 0.05`);
valor%=5;
resultado = Math.trunc(valor/1);
console.log(`${resultado} moeda(s) de R$ 0.01`);
valor%=1;
