var input = require('fs').readFileSync('stdin', 'utf8');
//positivos e media
var lines = input.split('\n').map(Number)

positivos = 0
total = 0
for(i = 0; i < lines.length;i++){
    if(lines[i] > 0){
        positivos++ 
        total += lines[i]
    }
    media = total/positivos
}
console.log(`${positivos} valores positivos`)
console.log(media.toFixed(1))