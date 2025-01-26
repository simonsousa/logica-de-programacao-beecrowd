var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(Number)//Validação de Nota

let notas = 0;
let somaNotas = 0;

while(true){
    let nota = lines.shift()
    if(nota < 0 || nota > 10){
        console.log('nota invalida')
    } else {
        notas++
        somaNotas += nota
    }
    if (notas == 2){
        let media = somaNotas/2
        console.log(`media = ${media.toFixed(2)}`)
        break
    }
}
