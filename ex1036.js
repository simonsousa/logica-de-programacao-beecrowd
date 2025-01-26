var input = require('fs').readFileSync('stdin', 'utf8');
//Fórmula de bhaskara
var [a,b,c] = input.split(' ').map(parseFloat)

let delta = (Math.pow(b,2)) - (4 * a * c)

let R1 = (-b + Math.sqrt(delta))/(2*a)
let R2 = (-b - Math.sqrt(delta))/(2*a)

if(delta > 0 && a > 0){
    console.log(`R1 = ${R1.toFixed(5)}\n
                 R2 = ${R2.toFixed(5)}`)
}else{
    console.log('impossivel calcular')
}


