var input = require('fs').readFileSync('stdin','utf-8')
    //(0,25]        0 até o valor de     25.0000000
    //(25,50]       25.00001 até o valor 50.0000000
    //(50,75]       50.00001 até o valor 75.0000000
    //(75,100]      75.00001 até o valor 100.0000000
let valor = parseFloat(input);
if(valor >= 0 && valor <= 25.0000){
    console.log('Intervalo (0,25]');
}else if(valor >= 25.0001 && valor <= 50.0000){
    console.log('Intervalo (25,50]');
}else if(valor >= 50.0001 && valor <= 75.0000){
    console.log('Intervalo (50,75]');
}else if(valor >= 75.0001 && valor <= 100.0000){
    console.log('Intervalo (75,100]')
}else{
    console.log('Fora de intervalo')
}