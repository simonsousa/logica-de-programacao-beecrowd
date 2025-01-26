var input = require('fs').readFileSync('./stdin','utf-8')
var lines = input.split('\n').map(parseInt);

let segundos = lines

function converterSegundos(segundos){
    const horas = Math.floor(segundos / 3600);// 1 hora = 3600 segundos
    const minutos = Math.floor((segundos % 3600) / 60); // 1 minuto = 60 segundos
    const Segundos = segundos % 60;// segundos restantes

    return `${horas}:${minutos}:${Segundos}`
}

console.log(converterSegundos(segundos))