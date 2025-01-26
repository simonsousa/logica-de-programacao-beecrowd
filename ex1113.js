var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');//Crescente e Decrescente
for(i = 0; i < lines.length; i++){
    let [X,Y] = lines[i].split(' ').map(Number);
    if(X > Y){
        console.log(`posicao[${i}] eh Decrescente`);
    }else if(X < Y){
        console.log(`posicao[${i}] eh Crescente`);
    }else{
        break;
    }
}