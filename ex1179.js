var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')

function imprimir(nomeVetor,vetor){
    contador = 0
    while(vetor.length > 0){
        console.log(`${nomeVetor}[${contador}] = ${vetor.shift()}`)
        contador++
    }    
}

let par = []
let impar = []

for(let i = 0; i < 15; i++){
    let num = Number(lines.shift())
    if(num % 2 == 0){
        par.push(num)
    } else {
        impar.push(num)
    }
    if(par.length == 5){
        imprimir('par',par)
    }
    if(impar.length == 5){
        imprimir('impar',impar)
    }
}
imprimir('impar',impar)
imprimir('par',par)

