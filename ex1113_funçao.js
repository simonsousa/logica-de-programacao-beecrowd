var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');//Crescente e Decrescente

for(i = 0; i < lines.length; i++){
    let [X,Y] = lines[i].split(' ').map(Number)
    if(analisarNum(X,Y)){
    }else{
        break;
    }
}
function analisarNum(a,b){
        if(a < b){
            console.log('Crescente');
            return true;
        }else if(a > b){
            console.log('Decrescente');
            return true;
        }else{
            return false;
        }
    }
