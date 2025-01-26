var input = require('fs').readFileSync('stdin', 'utf8');

let [A,B] = input.split('\n').map(Number);

const calcularMedia = (x,y) => (x * 3.5 + y * 7.5)/(3.5 + 7.5);

let media = calcularMedia(A,B);

console.log(`MEDIA = ${media.toFixed(5)}`);
