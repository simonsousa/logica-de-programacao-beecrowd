var input = require('fs').readFileSync('./stdin', 'utf8');

var [A,B,C,D] = input.split('\n').map(Number)//DIFERENÇA

const calcularDif = (a,b,c,d) => (a * b - c * d);

console.log(`DIFERENÇA = ${calcularDif(A,B,C,D)}`)