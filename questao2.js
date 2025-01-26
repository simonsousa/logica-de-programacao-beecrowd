var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split(' ').map(Number)

let size = lines.length
for(i = 0; i < size; i++){
    let div = 0
    let num = lines[i]
    for(j = 1; j <= num; j++){
        if(num % j == 0){
            div++
        }
    }
    console.log(`${lines[i]} tem ${div} divisores`)
}