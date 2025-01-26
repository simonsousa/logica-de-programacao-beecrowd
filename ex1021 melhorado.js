var input = require('fs').readFileSync('stdin','utf8');
let valor = Number(input);//Notas e Moedas(algoritmo desenvolvido por min, e submetido ao BEE)
const notas = [100, 50, 20, 10, 5, 2,] 
const moedas = [100, 50, 25, 10, 5, 1]//multiplicados por 100, para o programa não dar erro
let resultado = 0;
console.log('NOTAS:')
for(n of notas){
    resultado = Math.trunc(valor/n);
    console.log(`${resultado} nota(s) de R$ ${n.toFixed(2)}`);
    valor%=n;
}
valor*=100;
console.log('MOEDAS:');
for(m of moedas){
    resultado = Math.trunc(valor/m);
    console.log(`${resultado} moeda(s) de R$ ${(m/100).toFixed(2)}`);
    valor%=m;
}
