var input = require('fs').readFileSync('stdin', 'utf8');
let [A,B] = input.split(' ').map(Number);
//Múltiplos
if(A > B){
    [A,B] = [B,A]
}
if(B % A == 0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}