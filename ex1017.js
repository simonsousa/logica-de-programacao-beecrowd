var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number);
//Gasto de Combustível
var tempo = lines[0];
var velMedia = lines[1];
const consumoMedio = 12;

const distanciaTotal = tempo * velMedia

const combustNecess = distanciaTotal / consumoMedio;

console.log(combustNecess.toFixed(3));
