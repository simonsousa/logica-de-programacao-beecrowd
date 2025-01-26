var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n').map(Number);

let diag = []

for (let l=0; l < 3; l++){
    for(let c=0; c < 3; c++){
        n = lines.shift()
        if(l==c){
            diag.push(n)
        }    
    }
}console.log(diag)
