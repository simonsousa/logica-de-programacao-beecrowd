var input = require('fs').readFileSync('stdin', 'utf8');

let [codFunc,horasTrab,vlHora] = input.split('\n').map(Number);

const calcularSalario = (x,y) => x * y;

let salario = calcularSalario(horasTrab,vlHora);

console.log(`NUMBER = ${codFunc}
SALARY = U$ ${salario.toFixed(2)}`)

