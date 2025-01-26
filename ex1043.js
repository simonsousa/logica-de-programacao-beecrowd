var input = require('fs').readFileSync('stdin','UTF-8')

var lines = input.split('\n')//triângulo

calcular(lines)

function calcular(array){

    let [A,B,C] = array[0].split(' ').map(parseFloat)

    if ((A+B > C) && (A+C > B) && (B+C > A)){
        const perimetro = A + B + C
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)
    } else {
        const areaTrapezio = ((A + B)*C)/2
        console.log(`Area = ${areaTrapezio.toFixed(1)}`)
    }

}