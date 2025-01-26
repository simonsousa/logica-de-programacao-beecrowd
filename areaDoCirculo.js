var input = require('fs').readFileSync('stdin', 'utf8');
const pi = 3.14159;

let raio = Number(input);

const calcularRaio = (x,y) => Math.pow(x,2) * y;

let resultado = calcularRaio(raio,pi);

console.log('A=' + resultado.toFixed(4));

//for(n = 0; n < raios.length; n++){
   // console.log('A= ' + calcularRaios(raios[n],pi).toFixed(4));
//}
