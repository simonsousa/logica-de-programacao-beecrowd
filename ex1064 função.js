var input = require('fs').readFileSync('stdin', 'utf8');
//positivos e media
var lines = input.split('\n').map(Number)

function positMedia(x){
let positivos=0;
    let total=0;
    for(i = 0; i < x.length; i++){
        if(x[i] > 0){
            positivos++
            total += x[i]
        }
        media = total/positivos
    }
    return{
        positivos,
        media
    }
}let resultado = positMedia(lines)

console.log(`${resultado.positivos} valores positivos
    ${resultado.media.toFixed(1)}`)