var input = require('fs').readFileSync('./stdin','utf-8')
var lines = input.split('\n');
//distancia entre dois pontos
valores1 = lines.shift();
valores2 = lines.shift();

const [x1 , y1] = valores1.split(' ').map(parseFloat);
const [x2 , y2] = valores2.split(' ').map(parseFloat);

distancia = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))

console.log(distancia.toFixed(4))



