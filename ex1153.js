var input = require('fs').readFileSync('stdin', 'utf8');
var N = Number(input);

fat = 1
for(i = 1; i <= N; i++){
    fat*=i
}
console.log(fat)
