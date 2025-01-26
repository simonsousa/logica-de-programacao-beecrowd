var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n').map(Number)//idades

let sIdades = 0;
let contPosit = 0;
let i = 0;
while(i < lines.length){
    if(lines[i] > 0){
        sIdades += lines[i]
        contPosit++
    }else if(lines[i] < 0){
        break;
    }
    i++
}console.log((sIdades/contPosit).toFixed(2))