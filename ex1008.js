var input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n').map(Number);
//SALÁRIO
codFunc = lines[0]
horasTrab = lines[1]
vlHora = lines[2]

salario = (horasTrab * vlHora)

console.log(`NUMBER = ${codFunc}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)