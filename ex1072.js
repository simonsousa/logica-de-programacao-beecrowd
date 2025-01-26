var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);//intervalo 2;
let N = Number(lines.shift());
var dentro = 0;
var fora = 0;
for(i = 0; i < N; i++){
    if(lines[i] >= 10 && lines[i] <= 20){
        dentro++
    }else{
        fora++
    }
}console.log(`${dentro} in\n${fora} out`);
