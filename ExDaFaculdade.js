var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n').map(Number)

for(i = 0; i < lines.length; i++){
    let temp = lines[i]
    if(temp < 12){
        lines[i] = 'Frio'
    } else if(temp >= 12 && temp <= 20){
        lines[i] = 'Agradável'
    } else if(temp > 20){
        lines[i] = 'Quente'
    }    
}
console.log(lines)