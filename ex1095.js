var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//Sequencia IJ 1
j = 60
for(i = 1; i <= 37; i+=3){
    console.log(`I=${i} J=${j}`)
    j-=5
}
