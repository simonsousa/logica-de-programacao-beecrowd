var input = require('fs').readFileSync('stdin', 'utf8');
let [A,B,C] = input.split('\n').map(Number);
function calcularMedia(x,y,z){
    media = (x * 2 + y * 3 + z * 5)/(2 + 3 + 5);
    return media;
}
console.log('MEDIA = ' + calcularMedia(A,B,C));
