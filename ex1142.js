var input = require('fs').readFileSync('stdin', 'utf8');
//PUM
let X = 1;
for(let N = Number(input); N > 0; N--){
    console.log(`${X} ${X+1} ${X+2} PUM`)
    X+=4;
}
