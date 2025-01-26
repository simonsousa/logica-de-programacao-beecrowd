var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number);
//Média 1
var A = lines[0];
var B = lines[1];

const pesoNotaA = 3.5;
const pesoNotaB = 7.5;   

media = (A * pesoNotaA + B * pesoNotaB) / (pesoNotaA + pesoNotaB);

console.log(`MEDIA = ${media.toFixed(5)}`);