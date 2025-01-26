var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');//Dividindo X por Y
let N = Number(lines.shift());
let divisao = 0;
for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number);
    if(Y == 0){
        console.log('divisao impossivel');
    }else{
        divisao = X/Y;
        console.log(divisao.toFixed(1));
    }
}
    
